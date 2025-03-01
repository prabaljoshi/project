const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
let likes = 0;

likeButton.addEventListener('click', () => {
    // Increment likes count
    likes++;

    // Update the like count display
    likeCount.textContent = likes;

    // Toggle the 'liked' class for styling purposes
    likeButton.classList.toggle('liked');
});
