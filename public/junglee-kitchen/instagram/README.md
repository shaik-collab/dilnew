# Instagram Gallery Images

## How to Add Your Instagram Content

1. **Download Instagram Reel/Post Thumbnails:**
   - Go to your Instagram account (@thejungleekitchen)
   - Open each reel/post you want to display
   - Take a screenshot or download the thumbnail image
   - Save as JPG or PNG format

2. **Save Images Here:**
   - Save the thumbnail images in this folder (`/public/junglee-kitchen/instagram/`)
   - Name them clearly, e.g.:
     - `reel-1.jpg`
     - `reel-2.jpg`
     - `post-1.jpg`
     - etc.

3. **Get Instagram Post URLs:**
   - Click on the three dots (...) on each Instagram post/reel
   - Select "Copy Link"
   - You'll get a URL like: `https://instagram.com/reel/ABC123xyz/` or `https://instagram.com/p/ABC123xyz/`

4. **Update the Code:**
   - Open `src/pages/JungleeKitchen.tsx`
   - Find the `instagramPosts` array (around line 130)
   - Uncomment and update the placeholder structure:
   ```typescript
   {
     id: 1,
     thumbnail: "/junglee-kitchen/instagram/reel-1.jpg",
     url: "https://instagram.com/reel/YOUR_ACTUAL_REEL_ID",
   },
   ```
   - Add more entries for each post/reel you want to display

5. **Recommended:**
   - Display 6-12 posts/reels for best visual effect
   - Use square images (1:1 aspect ratio) for best display
   - Update regularly to keep content fresh

## Example Structure:
```
/public/junglee-kitchen/instagram/
  ├── reel-1.jpg
  ├── reel-2.jpg
  ├── reel-3.jpg
  └── ...
```

