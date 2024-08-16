# Components

## `GradientCard`

Props:

- `theme` - one of the available colors
- `title`
- `description`
- `tag`
- `variant` - `thin` or `normal`
- `link` - link to a page, optional

<GradientCard theme="cerise" title="title" description="Lorem ipsum dolor sit amet, qui minim labore
adipisicing minim sint cillum sint consectetur cupidatat." tag="tag" />

Or, it's `thin` variant:

<GradientCard theme="turquoise" title="title" description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." tag="tag" variant="thin"/>

You can also pass a `link`:

<GradientCard theme="meadow" title="title" description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." tag="tag"  link="https://ui.fmhy.net"/>

## `VideoFrame`

Rounded video frame with a `title` (default: `YouTube video frame`) and a `src`
which must be a YouTube Embed link like
`https://www.youtube.com/embed/RBEb2wC8u5E`:
<VideoFrame src="https://www.youtube.com/embed/RBEb2wC8u5E" />

---

<!-- prettier-ignore-start -->
:::info
The following components are only available in the `vitepress` theme and to be in vitepress itself.
:::
<!-- prettier-ignore-end -->

## `Tag`

Props:

- `text`
- `href` - optional
- `target` - Target of the link, like `_blank`

<Tag text="🔙 Home" href="/" />

## `LinkInline`

Props:

- `text`
- `href`
- `target` - Target of the link, like `_blank`

<LinkInline text="🚩 Link to UI" href="https://ui.fmhy.net" target="_blank" />

## `LinkCard`

Props:

- `title`
- `tags` - comma separated list of tags
- `description`
- `href`
- `target` - Target of the link, like `_blank`

<LinkCard title="title" tags="nice,card,meow" description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." href="https://ui.fmhy.net" />
