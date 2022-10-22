//Main Variables

let theinput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function() {
    getRepos();
};

//GET REPOS FUNCTION
function getRepos() {

    if (theinput.value == "") {
        
        reposData.innerHTML = "<span> Please Write GitHub Username </span>";

    }else {

        fetch(`https://api.github.com/users/${theinput.value}/repos`)
        
        .then((response) => response.json())
        
        .then((repositories) => {
            
            //Empty The  Container
            reposData.innerHTML= '';

            //Loop On Repositories
            repositories.forEach(repo => {

                // Create The Main Div Element
                let mianDiv = document.createElement("div")

                //Create Repo Name Text
                let repoName = document.createTextNode(repo.name);

                //Append the Text to Main Div
                mianDiv.appendChild(repoName);

                // Create Repo URL anchor
                let theUrl = document.createElement("a");

                //Create Repo URL Text
                let theUrlText = document.createTextNode("Visit");

                //Append The Repo Url text to Anchor Tag
                theUrl.appendChild(theUrlText);

                // Add the HyperText Ref "href"
                theUrl.href = `https://github.com/${theinput.value}/${repo.name}` ;

                //Set Attribute Blank 
                theUrl.setAttribute('target', '_blank');

                //Append Url Anchor To Main Div
                mianDiv.appendChild(theUrl);

                //Create Stars Count Span
                let starsSpan = document.createElement("span");

                //Create The Stars Count Text 
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                //Add Stars Count Text to Stars Span
                starsSpan.appendChild(starsText);

                //Add Class To Main Div
                mianDiv.className = "repo-box";

                //Append Stars Count Span To Main Div 
                mianDiv.appendChild(starsSpan);



                //Append The Main Div To Container
                reposData.appendChild(mianDiv);
            })
        });

    }

}
