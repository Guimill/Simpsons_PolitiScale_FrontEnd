# The Simpsons PolitiScale

Web app (React) : votez pour chaque personnage des Simpsons — plutôt de **gauche** ou de **droite** ? —
puis consultez le bilan des votes. API : [Simpsons_PolitiScale_Backend](https://github.com/Guimill/Simpsons_PolitiScale_Backend).

En ligne : https://politiscale.mi-fan.fr

## Développement

```sh
npm install
npm run dev      # http://localhost:5173 ; /api est transmis à l'API locale sur le port 3000
npm run build    # version de production dans dist/
```

Stack : React 19, React Router 7, Vite, Sass, styled-components.

## Production

Docker (`Dockerfile` : build Vite puis nginx, qui transmet `/api` au backend) derrière Nginx Proxy Manager.
Le serveur suit la branche `main` :

```sh
/srv/politiscale/deploy/update.sh
```

## Reste à faire

- rajouter l'ARIA
