//Product API fetching
let users = [];
let products_API = async()=> {
  try {
    let response = await fetch("https://opentdb.com/api.php?amount=50&category=18&type=multiple");
    response = await response.json();
    console.log(response);
    users = response.results;
    console.log(users);
    users.forEach((num)=> {
    console.log(`${num.question+"Correct Answer=>"+num.correct_answer}`);
    })
  } catch (error) {
    console.log(error);
  }
}
products_API();