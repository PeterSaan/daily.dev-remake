# daily.dev-remake

Remake of daily.dev

## Run the app

- Open project root and copy `.env` files from examples into `client` and `server` directories:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

- Make sure the ports used in `docker-compose.yaml` are open (3000, 3006 and 3306 atm)
- Finally run docker (in a terminal):

```bash
# For detached state
docker compose up -d
# Or for hot reload without detachment
docker compose watch
```

## MVP

- The app provides tech news, blog posts, videos etc., specifically tailored for developers
- The user must sign up and verify email to access full functionality - except for a shared link to specific content
- Admin accounts exist to manage content and review role upgrades
- The user can follow topics, sources and squads
- The user's feed consists of suggestions made by recently read posts, followed topics and followed sources
- The user has reputation points that can be gained or lost, based on some actions:
  - Upon account creation and email verification, starts at 10 points
  - Never falls below 0
  - Post upvoted: +10
  - Post downvoted: -10
  - Post banned or removed: -100
  - Comment upvoted: +50
  - Comment downvoted: -50
- Role-based content submission:
  - Squads: users with under 250 reputation
  - Community picks: users with 250 and over reputation
  - Sources: users that are owners of established publications or platforms in the developer community and are verified by admins
- Users (with appropirate access) can vote and comment on posts and other comments
- The user has the option of enabling reading streaks
- The user can see reading history
