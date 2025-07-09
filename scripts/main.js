        document.addEventListener('DOMContentLoaded', function() {
            // Get elements
            const mainImg = document.getElementById('main-display-img');
            const thumbnails = document.querySelectorAll('.custom-gallery__thumbnail');
            
            // Add click event to each thumbnail
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    // Update main image - remove any query parameters from thumbnail src
                    const newSrc = this.src.split('?')[0];
                    mainImg.src = newSrc;
                    mainImg.alt = this.alt;
                    
                    // Update active class
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Optional: Keyboard navigation
            document.addEventListener('keydown', function(e) {
                const activeThumb = document.querySelector('.custom-gallery__thumbnail.active');
                if (!activeThumb) return;
                
                let newActive;
                
                if (e.key === 'ArrowRight') {
                    newActive = activeThumb.nextElementSibling || thumbnails[0];
                } else if (e.key === 'ArrowLeft') {
                    newActive = activeThumb.previousElementSibling || thumbnails[thumbnails.length - 1];
                }
                
                if (newActive) {
                    const newSrc = newActive.src.split('?')[0];
                    mainImg.src = newSrc;
                    mainImg.alt = newActive.alt;
                    
                    thumbnails.forEach(t => t.classList.remove('active'));
                    newActive.classList.add('active');
                }
            });
        });