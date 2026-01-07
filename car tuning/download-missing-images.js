// Download Missing Car Images

const https = require('https');
const fs = require('fs');
const path = require('path');

// Missing images with alternative URLs
const images = [
    {
        url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&h=1600&fit=crop',
        filename: 'images/diagonal/car-2-left.jpg',
        description: 'Audi RS Sport Car'
    },
    {
        url: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1200&h=1600&fit=crop',
        filename: 'images/diagonal/car-5-right.jpg',
        description: 'Ford Mustang Performance'
    },
    {
        url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=800&fit=crop',
        filename: 'images/gallery/mercedes-c63-amg.jpg',
        description: 'Mercedes-AMG GT'
    },
    {
        url: 'https://images.unsplash.com/photo-1542362567-b07e54a79380?w=1200&h=800&fit=crop',
        filename: 'images/gallery/ford-mustang-gt.jpg',
        description: 'Ford Mustang GT500'
    },
    {
        url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop',
        filename: 'images/gallery/mclaren-720s.jpg',
        description: 'McLaren Supercar'
    }
];

// Download function
function downloadImage(url, filepath, description) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadImage(response.headers.location, filepath, description)
                    .then(resolve)
                    .catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`✓ Downloaded: ${description}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

// Download all
async function downloadAll() {
    console.log('Downloading missing images...\n');

    for (const image of images) {
        const filepath = path.join(__dirname, image.filename);

        try {
            await downloadImage(image.url, filepath, image.description);
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`✗ Failed: ${image.description}`);
        }
    }

    console.log('\n✓ All missing images downloaded!');
}

downloadAll().catch(console.error);
