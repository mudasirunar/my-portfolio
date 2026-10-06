#!/usr/bin/env python3
"""
========================================================================================
IMAGE OPTIMIZATION SCRIPT FOR PORTFOLIO ASSETS
========================================================================================

WHERE TO RUN THIS:
  Always run this script from the project root directory:
  /Users/apple/WorkSpace/My Portfolio/Portfolio_Website/mudasirs-droid-craft-main/mudasirs-droid-craft-main

HOW TO RUN:
  Option A (Recommended):
    npm run optimize-images

  Option B (Direct Python):
    python3 scripts/optimize-images.py

  Option C (Auto-delete original PNG/JPEGs after successful conversion):
    python3 scripts/optimize-images.py --delete-originals

----------------------------------------------------------------------------------------
HOW TO USE WHEN ADDING A NEW IMAGE:
----------------------------------------------------------------------------------------
1. Place your new image (.png, .jpg, or .jpeg) in any folder inside "src/assets/".
   Example:
     src/assets/smartledger/new_screenshot.png

2. Run the command in terminal:
     npm run optimize-images

3. WHAT HAPPENS:
   - The script converts your image IN-PLACE in the EXACT SAME FOLDER.
   - It creates: src/assets/smartledger/new_screenshot.webp
   - You do NOT need to copy or move anything! It stays in the same folder.
   - Oversized images (>1600px) are downsampled with Lanczos for razor-sharp Retina clarity.
   - High-quality WebP compression (quality 88) reduces file size by ~90%.

4. IN YOUR CODE:
   Import the newly generated .webp file:
     import newScreen from "@/assets/smartledger/new_screenshot.webp";

5. CLEANUP:
   Once the .webp is created, delete the original .png / .jpeg file to save disk space.
   (Or run with "--delete-originals" to have this done automatically).
========================================================================================
"""

import os
import sys
from PIL import Image

ASSETS_DIR = "src/assets"
MAX_DIMENSION = 1600
QUALITY = 88

def optimize_images(delete_originals=False):
    # Verify we are in the correct directory
    if not os.path.exists(ASSETS_DIR):
        print("✗ Error: 'src/assets' directory not found.")
        print("  Please make sure you run this script from the project root directory:")
        print("  cd '/Users/apple/WorkSpace/My Portfolio/Portfolio_Website/mudasirs-droid-craft-main/mudasirs-droid-craft-main'")
        sys.exit(1)

    converted_count = 0
    saved_bytes = 0
    deleted_count = 0

    for root, _, files in os.walk(ASSETS_DIR):
        for f in files:
            # Check for JPG, JPEG, PNG (skip favicon or hidden files)
            if f.lower().endswith((".jpg", ".jpeg", ".png")) and not f.startswith(".") and f != "favicon.png":
                orig_path = os.path.join(root, f)
                base_name, _ = os.path.splitext(f)
                webp_path = os.path.join(root, f"{base_name}.webp")

                # If webp exists and is newer than the source, skip conversion
                needs_conversion = not os.path.exists(webp_path) or (os.path.getmtime(orig_path) > os.path.getmtime(webp_path))

                if needs_conversion:
                    orig_size = os.path.getsize(orig_path)
                    try:
                        with Image.open(orig_path) as img:
                            # Preserve transparency for RGBA / PNG
                            if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                                img_to_save = img.convert("RGBA")
                            else:
                                img_to_save = img.convert("RGB")

                            # Downsample if width or height exceeds 1600px
                            w, h = img_to_save.size
                            if max(w, h) > MAX_DIMENSION:
                                if w > h:
                                    new_w = MAX_DIMENSION
                                    new_h = int(h * (MAX_DIMENSION / w))
                                else:
                                    new_h = MAX_DIMENSION
                                    new_w = int(w * (MAX_DIMENSION / h))
                                img_to_save = img_to_save.resize((new_w, new_h), Image.Resampling.LANCZOS)

                            # Save as WebP in the EXACT SAME DIRECTORY
                            img_to_save.save(webp_path, "WEBP", quality=QUALITY, method=6)
                            webp_size = os.path.getsize(webp_path)
                            saved_bytes += (orig_size - webp_size)
                            converted_count += 1
                            print(f"✓ Converted: {f} -> {base_name}.webp ({orig_size // 1024}KB -> {webp_size // 1024}KB)")
                    except Exception as e:
                        print(f"✗ Failed {orig_path}: {e}")
                        continue

                # Auto-delete original if flag is passed and webp is verified
                if delete_originals and os.path.exists(webp_path):
                    os.remove(orig_path)
                    deleted_count += 1
                    print(f"  🗑 Deleted original: {f}")

    if converted_count > 0:
        print(f"\nDone! Converted {converted_count} new image(s), saved {saved_bytes / (1024 * 1024):.2f} MB.")
    else:
        print("All images are already up to date in WebP format.")

    if deleted_count > 0:
        print(f"Removed {deleted_count} raw original image(s).")

if __name__ == "__main__":
    auto_delete = "--delete-originals" in sys.argv or "--clean" in sys.argv
    optimize_images(delete_originals=auto_delete)
