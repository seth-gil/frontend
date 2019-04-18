echo Enter commit message.
read message
cd /Users/gilbertvirgo/Desktop/animatrix-v2/frontend
npm run build
git add .
git commit -m "Message: $message"
git push
 
