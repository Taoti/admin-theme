HOW TO UPDATE THIS REPO
-----------------------

- Add the upstream remote from gitlab, you might need a drupal.org account for
this and ssh configured

`git remote add upstream git@git.drupal.org:project/gin.git`

- Pull the changes

`git pull upstream master`

- Push the updates (if no conflicts)

`git push origin master`

- If there are conflicts on the composer.json file make sure that `drupal/gin` 
is kept as `taoti/gin`
