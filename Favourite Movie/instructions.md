# Instructions
##4. Exercise 1 - Passing Data
Use React and the `profiles`, `users`, and `movies` data in `App.js` to display a list of users alongside their favorite movies.

## Example

The `users` object has the user "Jane Cruz":

```js
const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  }
  .
  .
  .
};
```

And the `profiles` array has a combination of which users like which movies:

```js
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  .
  .
  .
];
```

From this information, one of the list items might look like this:

> Jane Cruz's favorite movie is Planet Earth 1.

##5. Exercise 2 - Passing Data

Let's do something a little bit more complicated. Instead of displaying a
list of users and their movies, this time you need to display a list of movies.

For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorited, display some text stating that no one favorited the movie.

As you go about tackling this project, try to make the app *modular* by breaking it into resusable React components.

## Example

```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
```

##7. Exercise - Functional Components
**Task**: Modify this app to use Stateless Functional Components. Remember that for
performance reasons, if a compoenent doesn't need to hold state, we'd want to
make it a Stateless Functional Component.

This exercise will help you practice passing data into Stateless Functional Components.

