eval "$(ssh-agent -s)" # start the ssh agent
openssl aes-256-cbc -K $encrypted_493a21d0641d_key -iv $encrypted_493a21d0641d_iv -in .travis/deploy_ssh_key.enc -out .travis/deploy_ssh_key -d
chmod 600 .travis/deploy_ssh_key # this key should have push access
ssh-add .travis/deploy_ssh_key
git remote add deploy dokku@wic.oweb.co:wichacks-stage
git push --force deploy develop:master
