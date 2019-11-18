module.exports = async function (string) {

    let applicantArray = [];
    const comments = document.querySelectorAll(".comment");
    const expression = new RegExp(".*" + string + ".*");

    for (i = 0; i < comments.length; i++) {

        const commentContent = comments[i].querySelector("form p").textContent;

        if (expression.test(commentContent)) {

            const username = comments[i].querySelector(".author").textContent;
            applicantArray.push(username);

        }

    }

    return applicantArray;

}