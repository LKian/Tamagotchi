## Styling

### Sass

I used Sass as the project's preprocessor. To install Sass globally, I used NPM. Run the following command in the terminal

```sh
npm install -g sass
```

In this code mockup, I learned how to set up SASS from scratch rather than relying on an existing theme as I've always done. After a lot of ....trial and errors, Sass was workingThere are a few perks to using Sass rather than CSS.

- **Organization** | Linking all stylesheets into one central stylesheet. Being able to componentize stylesheets creates a great system for targeting a section or element in an organized fashion. This is also showcased in the next two points.

- **Variables** | The ability to set a few basic colors, etc in one spot and reuse them, be able to switch multiple areas in one line of code is super powerful and efficient. For example, if `variables.scss` is correctly set up, changing website colors for a client who decides to change their company's brand colors would take less than a few minutes.

- **Nesting** | Have all media queries, states, and sub-elements within the umbrella of a parent class. Nesting is much better than having to repeat classes each time a hover or media query was needed. Comparing to CSS, SASS also reduces the amount of code that would have been needed.

### Layout

Flexbox. That is all. Site is fully responsive and beautiful on mobile and tablet.

[Installation](https://sass-lang.com/install)

After setting up the initial folder and file structure, I opened the terminal and typed the command

```sh
sass --watch assets/scss/main.scss assets/css/main.css
```

[Guide](https://sass-lang.com/guide)

The watch command tells SASS to watch main.scss SCSS file for changes and compile into main.css.

## Misc

### Links

All external links are to be opened in a new tab by using `target=_blank` in the `<a>` tags. This keeps the user engaged with the current site rather than completely leaving to visit another website.

## Credits

### Icons

[FontAwesome](https://fontawesome.com/): Since I used this last ~2016, the class names for the icons have changed from <code>fa</code> to either <code>fab</code> for brand icons or <code>fas</code> for solid icons, depending on what the icon is. Three hours of frustration and confidence that the issue was the file architecture rather than a classname led to a Google Search that led me to....

[Tutorial on Architectural Setup](youtube.com/watch?v=7C9H0EzPxl8):
modified my folder structure so files are all in a `fontawesome` folder rather than loose files within `scss`.

### Favicon

[Bug Favicon](https://gauger.io/fonticon/)

### Logo
