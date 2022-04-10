# calculateur-ges-num

### Présentation

Ce projet a pour vocation de développer un outil permettant de mesurer l'impact carbone de votre utilisation du numérique. Il se présente sous la forme d'une interface intuitive parlaquelle on peut spécifier les apparails numériques que l'on utilise en une journée ainsi que les services numériques que l'on effectue.

Vous pouvez trouver une version du site sur : https://mon-impact-numerique.web.app/



### Project setup

Ce projet est développé en Vue 2. Ce choix a été fait pour le caractère component-oriented du framework et pour sa capacité à monter rapidemment en fonctionnalités. 

Pour installer les dépendances : 
```
npm install
```

Pour lancer l'environnement de développement
```
npm run serve
```

Pour build le projet
```
npm run build
```
Le projet est déployé sur le service d'hébergement Firebase. Après chaque build, pour déployer l'application, il faut effectuer :
```
cd dist
firebase init

```

Faires les choix suivants : 

```
Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confir
m your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
? What do you want to use as your public directory? .
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File ./index.html already exists. Overwrite? No

```
Quand vous avez de configurer firebase, on peut déployer l'application :

```
firebase deploy
```



