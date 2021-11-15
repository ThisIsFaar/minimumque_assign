import {toast} from  'react-toastify';
export async function login(unme, pwd) {
  let credBody = { pwd, unme };
  let result = await fetch("https://minimumque.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
    "Content-Type": "application/json",
    },
    body: JSON.stringify(credBody),
  });
  result = await result.json();
  if (result.err === "Your account is no longer active"){
    toast.info(result.err);
    toast.error(result.sts);
  } else if (result.err === "Invalid Username or Password"){
    toast.error(result.err);
    toast.error(result.sts);
  }
}
