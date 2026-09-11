const Jimp = require('jimp');
const path = require('path');

async function removeBackground() {
  try {
    const imagePath = path.join(__dirname, 'public', 'logo.png');
    
    console.log('Loading image...');
    const image = await Jimp.read(imagePath);
    
    console.log('Processing image...');
    // Replace white background with transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very light (close to white), make it transparent
      if (red > 230 && green > 230 && blue > 230) {
        this.bitmap.data[idx + 3] = 0; // alpha channel to 0
      }
    });
    
    console.log('Saving image...');
    await image.writeAsync(imagePath);
    console.log('White background removed successfully! Saved as logo.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeBackground();
