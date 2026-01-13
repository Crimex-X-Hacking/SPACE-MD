require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABKOLVz4LJQILQUAAJYIAAAKAAAAY3JlZHMuanNvbpVVy47iRhT9lVFtQYOxARukluIXtAGDwYAxURaFXbbL+IVd5jVqaVYj5R3lIaUX*QGJFI2U1SzSyQ*kI1q9zIpPiEx3z4w0nVGnVuV6nnPqnOsXIIpxhnpoD1ovQJLiDSSo6JJ9gkALCLnjoBSUgQ0JBC0QdpTl0BhtmiWtQZQGXsq56pkjYyNzlcFyo3frQW*roOpMVs7ARRkk+TLA1kcOZMbEt8hM4sUNZBvDzviwNASoK7qtotUeMSKqJfsJ9Afz7Rm4KE6EOMWRKyceClEKgx7aaxCnT4Pfk7S8nS+i3VzdUhN+n2b6zNW7vU7JsKpTUQjWSFRKvbFEu0+Db6VepT7yeM8ldUroo4qk92txL9m7nYUhp+FsCr1MFPj2jLqDn2E3QrZio4hgsn+y7rU2FKcsk3MHzVkbwdZs4hpih3i7jVktoqzDMKRHUl+2pvHTgK+VkCmFAn2eK8nAoEx9CTfV*sb3D4dDg1+a*mA3NBbEMEL3feBa+uCV1f*RnVe01VRSVIqd9CZqsPbM6YJZCZNI0krOpFcdWyrtKsZm1ZGfBt+fhja3q+QDzVkzo6kUlNi1bTczNBNWtfHARGygcfR6FFPxO*iQ5OnHUC5H1ELrY2c5rXQPc7+Umls5zyJtOBly9Kwy2VYUpb5uHg5kg*1UN7FH0zXZN2Y83G+zRWfSoFf6vNmeC3KgG72tzAY7nz87MVqhvWKDVvWiDFLk4oykkOA4Oo1xtTKA9kZHVorISV7g9Rku4rTAQ4w5VOIV5cZwcai4luIdJmyWlqZbeejPk0XFPANlkKSxhbIM2ec4I3G6V1GWQRdloPXp6aUK0ikKY4K62AYt0Kxy9WqdqzM1rvlJ9nzrQZLBJHkeIQLKwEnjUEWg5cAgQ2Vw2sHX24wkNGWBpRoUKzQoiaeFqihxbbbdpupSAQKmBFs4gREBLQAKTnaKsgxHrhrbheBJVEgR3oGb4BBlBIYJaFXZBsfQNNdkLj4rgwjtyJ3PCnW4KlMGDk4zMo3yJIih*eDCt7PQsuI8Ivo+ssSig1LQot4NI0Jw5GaFBnkEU8vDGyQWjO8Zvn0SlCIbtEiao7dlRrwDXme1hcnqBcvw5KAPVGw9omMEi8Xg9pvX*7z+7e*r25dfHa9+*ut4dfn5sw*a8ern6+PV5RfHq8tvH5s9zXxf7D1eXb48Xl1+*ezZ7Zsfb9*89Oz4w6tfbq6*u7n+*eaPb2+uv7z58+Xxh1e*gjIITjBppkE1KZbmGI6u02yr+UkxfvFWoIKPjQjEQQZaQOxLvFvatmXVz0Mr63R42eVFlwfvBH2I0p1VlXUtb6CuZ*fNbKawycH0D+zUUVSZm08oY9Zd7ceaK6gCRZ09ckiho7sTe6y5hhvFTPvcrNqnDD4YTKu2YXc7njy3ksQQ+xQ34lSOWZhNvHM7K3*UVzGjkE2+3M0r5*XxNi0N5uKoXotiNxK3Z8VtNtpgC71*WT6LaInbVWFX1nnPGJdWWq8XmbpOjUtm0kVrn6KHZo9Em3xSw1psamsvFjiXDAWHcIIi9WnV8TdBRZXYbMpnyt7X3PuQn4pMcF*c8X388OnTwehUK+898fibPOAtnE1dlN*bel90*6NwCXov7+cRNuc63W*rw4ZFK1yper6XBK1NNduBvlBXkxo*4e0BuCgylgSQOHEaghbIwiUEZZDGeRETJXLij9wk8itFGLl6wTaAGeHfRe+xPFfvVmlpnJzDzCv+9465FXtFjvZ8kugEkocoA75oWnMMLv4FUEsBAhQDFAAACAgAEo4tXPgslAgtBQAAlggAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAVQUAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '918515853489',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'dark-nick-10',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
