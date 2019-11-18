module.exports = async function getUsers(string) {
  const applicantArray = [];
  // eslint-disable-next-line no-undef
  const comments = document.querySelectorAll('.comment');
  const expression = new RegExp(`.*${string}.*`);
  for (let i = 0; i < comments.length; i += 1) {
    const commentContent = comments[i].querySelector('form p').textContent;
    if (expression.test(commentContent)) {
      const username = comments[i].querySelector('.author').textContent;
      applicantArray.push(username);
    }
  }
  return applicantArray;
};
