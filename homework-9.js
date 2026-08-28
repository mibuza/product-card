import { comments } from "./comment.js";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = number.slice(5, 10);
console.log(newArray);

const furniture = ["стол", "стул", "кровать", "шкаф", "диван"];

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(furniture));
console.log(reverseArray(number));

const commentsByComEmail = (comments) => {
  return comments.filter((comments) => comments.email.includes(".com"));
};

const result = commentsByComEmail(comments);
console.log(result);

//const newComments = comments.map((comment) => {
//  if (comment.id <= 5) {
//    return {
//      ...comment,
//      postId: 2
//    };
//  } else {
//    return {
//      ...comment,
//      postId: 1
//    };
//  }
//});

const updatedcomments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

console.log(updatedcomments)

const usersIdName = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(usersIdName)

const validateComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(validateComments)

