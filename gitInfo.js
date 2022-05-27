/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a program that allows for version control. You can 'save' your code periodically and it will save your code exactly as it was when you saved it. This allows you to essentially 'go back in time' in your code to see if what was different.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a website that allows you to store your code repositories and commits on the cloud. This allows you to maintain access to all your code even if something happened on your local storage, like files getting corrupted or if your computer was stolen";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    code: "git init",
    description: "Init creates (initializes) a repository in the directory that you're in"
};
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    code: "git clone",
    description: "Clone copies an entire existing Git repository and creates a repository on your computer and populates it with the clone of the existing one"
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    code: "git status",
    description: "Status allows you to see the status of your repository. It shows you if you've made any changes since your last commit, and shows you if you've staged any files to be ready for commit"
};
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    code: "git add",
    description: "Add allows you to stage files to be ready to commit them"
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    code: "git commit",
    description: "Commit allows you to 'save' the changes you've made on a file or multiple files. You can go back into all the commits you've made on a repository and load the code"
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    code: "git push",
    description: "Push allows you to push your repository/commits to GitHub, so that they're saved on the cloud"
};