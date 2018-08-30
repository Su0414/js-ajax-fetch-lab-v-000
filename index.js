function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken()
     
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '9ef7770620101713a8660b504e95b8ec47ec64e7'
}
