#   
 Technigo


YOU HAVE UNREAD FOR YOU NOTIFICATIONS
user avatar
So Youn Choi
5
Technigo
Free team
CONTENT
Questions
For You
Bookmarks
Tags
COMMUNITY
Users
MANAGE
Want more features?
is there any way to fork twice?
Ask a question
Asked 3 months ago
Modified 3 months ago
Viewed 45 times

0


I wanted to do project again from start but wanted to save the commits, because I thought I will be in need to read that again or start from there again. if I give up the progress I have done, I can simply delete the repo and fork again. but in this case, can I fork twice and make two repo? I am getting this error.

project-music-releases-vite git:(main) git remote add origin https://github.com/catfooo/project-music-music-vitee.git

error: remote origin already exists.

➜ project-music-releases-vite git:(main) git push -u origin main

remote: Permission to Technigo/project-music-releases-vite.git denied to catfooo.

fatal: unable to access 'https://github.com/Technigo/project-music-releases-vite.git/': The requested URL returned error: 403
People asked
Add people
Tags
gitEdit
Share
Edit
Close
Delete
asked Sep 20, 2023 at 14:28
So Youn Choi's user avatar
So Youn Choi
544 bronze badges
 add a reaction
Add a comment
2 Answers
Sorted by:

 
0


ADMIN
👋

It seems like you're trying to push to a repository owned by Technigo, and unfortunately, you don't have permission to push directly to repositories owned by others unless you've been granted access.

Below is a step-by-step guide on how to clone a repository, remove the .git directory (which disconnects it from the original repository), and then upload it as a new repository on your GitHub account.

Step 1: Clone the Repository

Open a terminal and navigate to the directory where you want to clone the repository. Run the following command, replacing the URL with the URL of the repository you want to clone:

git clone https://github.com/original-owner/original-repo.git
Step 2: Navigate to the Cloned Repository

Navigate to the directory of the cloned repository:

cd original-repo
Step 3: Remove the .git Directory

Remove the .git directory, which contains the history and configuration of the cloned repository:

rm -rf .git
Step 4: Initialise a New Git Repository

Initialise a new Git repository in the current directory:

git init
Step 5: Create a New Repository on GitHub

Go to GitHub.
Ensure you are logged in to your account.
Click on the "+" icon in the upper right corner and select "New repository".
Name your repository and provide any other details as needed, then click "Create repository".
Step 6: Add Remote Origin for the New Repository

In your terminal, add the URL of your new GitHub repository as the remote origin, replacing the URL with the URL of your new repository:

git remote add origin https://github.com/your-username/your-new-repo.git
Step 7: Add Files to the New Repository

Add all the files in the current directory to the new repository:

git add .
Step 8: Commit the Files

Commit the added files with a commit message:

git commit -m "Initial commit"
Step 9: Push to GitHub

Push the committed files to your new GitHub repository:

git push -u origin main
If you named your default branch differently, replace main with the name of your branch in the last command.

Hope this helps
Share
Edit
Follow
answered Sep 21, 2023 at 14:03
Diego Zito's user avatar
Diego ZitoAdmin
28611 gold badge11 silver badge44 bronze badges
   1
it works! now I can make many examples to show others with saving my original version! – 
So Youn Choi
 Sep 27, 2023 at 18:42    
Add a comment
 
0


Unfortunately you are not able to fork the same repo twice. You can do how many clones as you would like to your local computer as long as you name them differently. If you rather want to try out different solutions in a specific period in your project you can always go back to a specific commit and start over from there.

I am not really sure if this answers your question, so please reach out if I misinterpreted your question.
Share
Edit
Follow
answered Sep 21, 2023 at 12:15
Theres Brännberg Lendt's user avatar
Theres Brännberg LendtAdmin
53811 gold badge11 silver badge44 bronze badges
   1
Add a comment
 Answer your question in Technigo
Related

0
"Repository not found"-message in terminal when pushing code to Github
0
Commit to Github
STACK OVERFLOW

About
Press
Work Here
Contact Us
API
PRODUCTS

Teams
Advertising
Collectives
Talent
POLICIES

Legal
Privacy Policy
Terms of Service
Cookie Settings
Cookie Policy
CHANNELS

Blog
Podcast
Newsletter
Twitter
LinkedIn
Instagram
