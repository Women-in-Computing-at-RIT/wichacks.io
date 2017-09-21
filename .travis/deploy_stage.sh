eval "$(ssh-agent -s)" # start the ssh agent
openssl aes-256-cbc -K $encrypted_60565ecba2d1_key -iv $encrypted_60565ecba2d1_iv -in .travis/deploy_ssh_key.enc -out .travis/deploy_ssh_key -d
chmod 600 .travis/deploy_ssh_key # this key should have push access
ssh-add .travis/deploy_ssh_key
git remote add deploy dokku@wic.oweb.co:wichacks-stage
git push --force deploy develop:master
