const likesId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pEISiLJvLymH65NIR0wE/likes/';

const countLikes = (data, itemId) => {
  const result = data.filter((obj) => obj.item_id === itemId);
  if (result) {
    const likeBadge = document.getElementById(itemId);
    likeBadge.textContent = `${result[0].likes} 🤍`;
  }
};
const getLikeCount = async (itemId) => {
  try {
    // Send request to Involvement API
    const response = await fetch(likesId);
    const data = await response.json();
    // Update the like count badge
    const result = data.filter((obj) => obj.item_id === itemId);
    if (result.length >= 1) {
      countLikes(data, itemId);
    }
  } catch (error) {
    // Handle Error
  }
};

const handleLike = async (itemId) => {
  try {
    // Send request to Involvement API
    await fetch(likesId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });
    getLikeCount(itemId);
    // Update Like count badge
  } catch (error) {
    // Error Handling
  }
};

export { countLikes, getLikeCount, handleLike };
