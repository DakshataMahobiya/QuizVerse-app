// QuizVerse Question Bank
// 480 questions: 8 topics × 3 difficulty levels × 20 questions

const quiz = [
    {
        "question": "What does HTML stand for?",
        "choices": [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        "answer": "Hyper Text Markup Language",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates the largest heading?",
        "choices": [
            "<h6>",
            "<h1>",
            "<head>",
            "<heading>"
        ],
        "answer": "<h1>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates a hyperlink?",
        "choices": [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        "answer": "<a>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag inserts an image?",
        "choices": [
            "<image>",
            "<pic>",
            "<img>",
            "<src>"
        ],
        "answer": "<img>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which attribute specifies an image URL?",
        "choices": [
            "href",
            "src",
            "link",
            "url"
        ],
        "answer": "src",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates an unordered list?",
        "choices": [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        "answer": "<ul>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates a paragraph?",
        "choices": [
            "<para>",
            "<p>",
            "<text>",
            "<paragraph>"
        ],
        "answer": "<p>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates a line break?",
        "choices": [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        "answer": "<br>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which attribute provides alternative image text?",
        "choices": [
            "title",
            "alt",
            "text",
            "description"
        ],
        "answer": "alt",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag defines a table row?",
        "choices": [
            "<td>",
            "<tr>",
            "<th>",
            "<row>"
        ],
        "answer": "<tr>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag defines a table data cell?",
        "choices": [
            "<cell>",
            "<td>",
            "<data>",
            "<tr>"
        ],
        "answer": "<td>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which HTML element contains metadata?",
        "choices": [
            "<body>",
            "<meta>",
            "<head>",
            "<info>"
        ],
        "answer": "<head>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag defines the document title?",
        "choices": [
            "<title>",
            "<caption>",
            "<name>",
            "<header>"
        ],
        "answer": "<title>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag is used for a numbered list?",
        "choices": [
            "<ul>",
            "<ol>",
            "<li>",
            "<nl>"
        ],
        "answer": "<ol>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag defines a list item?",
        "choices": [
            "<item>",
            "<li>",
            "<list>",
            "<point>"
        ],
        "answer": "<li>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which input type hides typed characters?",
        "choices": [
            "text",
            "password",
            "hidden-text",
            "secret"
        ],
        "answer": "password",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which tag creates a button?",
        "choices": [
            "<btn>",
            "<button>",
            "<inputbutton>",
            "<click>"
        ],
        "answer": "<button>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which attribute gives an element a unique identifier?",
        "choices": [
            "class",
            "id",
            "name",
            "key"
        ],
        "answer": "id",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which attribute can assign multiple elements to the same CSS group?",
        "choices": [
            "id",
            "class",
            "group",
            "stylegroup"
        ],
        "answer": "class",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which declaration specifies HTML5?",
        "choices": [
            "<!DOCTYPE html>",
            "<HTML5>",
            "<!HTML>",
            "<DOCTYPE5>"
        ],
        "answer": "<!DOCTYPE html>",
        "topic": "html",
        "difficulty": "easy"
    },
    {
        "question": "Which semantic element represents navigation links?",
        "choices": [
            "<navigate>",
            "<nav>",
            "<navigation>",
            "<links>"
        ],
        "answer": "<nav>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element represents independent, self-contained content?",
        "choices": [
            "<section>",
            "<article>",
            "<aside>",
            "<content>"
        ],
        "answer": "<article>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element is commonly used for a thematic section?",
        "choices": [
            "<section>",
            "<part>",
            "<theme>",
            "<division>"
        ],
        "answer": "<section>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element is intended for content tangentially related to the main content?",
        "choices": [
            "<aside>",
            "<extra>",
            "<side>",
            "<related>"
        ],
        "answer": "<aside>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element represents the footer of a page or section?",
        "choices": [
            "<bottom>",
            "<footer>",
            "<end>",
            "<foot>"
        ],
        "answer": "<footer>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element represents the main content?",
        "choices": [
            "<main>",
            "<content>",
            "<primary>",
            "<center>"
        ],
        "answer": "<main>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which attribute makes a form control mandatory?",
        "choices": [
            "required",
            "mandatory",
            "validate",
            "must"
        ],
        "answer": "required",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which form method generally sends data in the request body?",
        "choices": [
            "GET",
            "POST",
            "SEND",
            "BODY"
        ],
        "answer": "POST",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element groups related form controls?",
        "choices": [
            "<group>",
            "<fieldset>",
            "<formgroup>",
            "<set>"
        ],
        "answer": "<fieldset>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which tag provides a caption for a <fieldset>?",
        "choices": [
            "<caption>",
            "<legend>",
            "<label>",
            "<title>"
        ],
        "answer": "<legend>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which tag associates text with a form control?",
        "choices": [
            "<label>",
            "<caption>",
            "<text>",
            "<fieldlabel>"
        ],
        "answer": "<label>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which input type allows selecting multiple files?",
        "choices": [
            "file-multiple",
            "file",
            "multiple-file",
            "upload"
        ],
        "answer": "file",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which attribute connects a label to an input by ID?",
        "choices": [
            "for",
            "target",
            "bind",
            "input"
        ],
        "answer": "for",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which HTML element embeds another webpage?",
        "choices": [
            "<framepage>",
            "<iframe>",
            "<embedpage>",
            "<window>"
        ],
        "answer": "<iframe>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element is used for scalable vector graphics?",
        "choices": [
            "<svg>",
            "<vector>",
            "<graphic>",
            "<canvas2d>"
        ],
        "answer": "<svg>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element is used for script code?",
        "choices": [
            "<javascript>",
            "<script>",
            "<codejs>",
            "<js>"
        ],
        "answer": "<script>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element is used for CSS rules inside an HTML document?",
        "choices": [
            "<css>",
            "<style>",
            "<stylesheet>",
            "<design>"
        ],
        "answer": "<style>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which attribute opens a link in a new browsing context?",
        "choices": [
            "new",
            "target=\"_blank\"",
            "open=\"new\"",
            "window=\"new\""
        ],
        "answer": "target=\"_blank\"",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which attribute prevents form submission when invalid according to built-in validation?",
        "choices": [
            "novalidate",
            "required",
            "pattern",
            "disabled"
        ],
        "answer": "novalidate",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which element provides a label/caption for a figure?",
        "choices": [
            "<figurecaption>",
            "<figcaption>",
            "<caption>",
            "<label>"
        ],
        "answer": "<figcaption>",
        "topic": "html",
        "difficulty": "medium"
    },
    {
        "question": "Which HTML feature lets an input offer predefined suggestions?",
        "choices": [
            "<suggest>",
            "<datalist>",
            "<options>",
            "<autocomplete-list>"
        ],
        "answer": "<datalist>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute on <form> specifies where submitted data is sent?",
        "choices": [
            "action",
            "target",
            "endpoint",
            "sendto"
        ],
        "answer": "action",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute controls how form data is encoded before submission?",
        "choices": [
            "encoding",
            "enctype",
            "formtype",
            "serialize"
        ],
        "answer": "enctype",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element represents a disclosure widget that can be opened and closed?",
        "choices": [
            "<details>",
            "<disclosure>",
            "<toggle>",
            "<expand>"
        ],
        "answer": "<details>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element provides the visible summary for <details>?",
        "choices": [
            "<summary>",
            "<caption>",
            "<label>",
            "<title>"
        ],
        "answer": "<summary>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute allows an element to be dragged?",
        "choices": [
            "drag",
            "draggable",
            "movable",
            "can-drag"
        ],
        "answer": "draggable",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element is designed to display machine-readable measurements?",
        "choices": [
            "<measure>",
            "<meter>",
            "<gauge>",
            "<value>"
        ],
        "answer": "<meter>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element represents progress toward completion?",
        "choices": [
            "<progress>",
            "<loading>",
            "<bar>",
            "<completion>"
        ],
        "answer": "<progress>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element can provide alternative media sources?",
        "choices": [
            "<source>",
            "<media-source>",
            "<option>",
            "<track>"
        ],
        "answer": "<source>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element provides timed text for video/audio?",
        "choices": [
            "<caption>",
            "<track>",
            "<subtitle>",
            "<timedtext>"
        ],
        "answer": "<track>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute can make an element editable by the user?",
        "choices": [
            "editable",
            "contenteditable",
            "edit",
            "useredit"
        ],
        "answer": "contenteditable",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute controls whether an element participates in sequential keyboard navigation?",
        "choices": [
            "tabindex",
            "keyboard-index",
            "focusorder",
            "taborder"
        ],
        "answer": "tabindex",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which HTML API is associated with storing key-value data in the browser persistently?",
        "choices": [
            "localStorage",
            "sessionCache",
            "browserDB",
            "cookieStore"
        ],
        "answer": "localStorage",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which HTML element can define responsive image alternatives based on media conditions?",
        "choices": [
            "<picture>",
            "<responsive>",
            "<imageset>",
            "<imgset>"
        ],
        "answer": "<picture>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute on <img> can provide multiple image resources for different resolutions?",
        "choices": [
            "srcset",
            "images",
            "sizeset",
            "resolution"
        ],
        "answer": "srcset",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute helps browsers choose an appropriate image from srcset?",
        "choices": [
            "sizes",
            "widthset",
            "choose",
            "responsive"
        ],
        "answer": "sizes",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element represents a date/time value that can be machine-readable?",
        "choices": [
            "<date>",
            "<time>",
            "<datetime>",
            "<timestamp>"
        ],
        "answer": "<time>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which attribute can specify a regular expression for input validation?",
        "choices": [
            "regex",
            "pattern",
            "validate",
            "match"
        ],
        "answer": "pattern",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which input attribute specifies the expected format hint shown to users?",
        "choices": [
            "placeholder",
            "hint",
            "format",
            "example"
        ],
        "answer": "placeholder",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "Which element is used to group options inside a select menu?",
        "choices": [
            "<optiongroup>",
            "<optgroup>",
            "<groupoption>",
            "<selectgroup>"
        ],
        "answer": "<optgroup>",
        "topic": "html",
        "difficulty": "hard"
    },
    {
        "question": "What does CSS stand for?",
        "choices": [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Syntax"
        ],
        "answer": "Cascading Style Sheets",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property changes text color?",
        "choices": [
            "font-color",
            "color",
            "text-color",
            "foreground"
        ],
        "answer": "color",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property changes the background color?",
        "choices": [
            "bgcolor",
            "background-color",
            "background-style",
            "color-bg"
        ],
        "answer": "background-color",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which selector targets an element by ID?",
        "choices": [
            ".",
            "#",
            "#id",
            "*"
        ],
        "answer": "#",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which selector targets a class?",
        "choices": [
            "#",
            ".",
            "class",
            "@"
        ],
        "answer": ".",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property controls font size?",
        "choices": [
            "text-size",
            "font-size",
            "size",
            "font"
        ],
        "answer": "font-size",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property makes text bold?",
        "choices": [
            "font-weight",
            "text-bold",
            "bold",
            "font-style"
        ],
        "answer": "font-weight",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property controls outside spacing?",
        "choices": [
            "padding",
            "margin",
            "spacing",
            "border-space"
        ],
        "answer": "margin",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property controls inside spacing?",
        "choices": [
            "margin",
            "padding",
            "inner-space",
            "space"
        ],
        "answer": "padding",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property sets a border?",
        "choices": [
            "outline",
            "border",
            "line",
            "box-border"
        ],
        "answer": "border",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which value makes an element a flex container?",
        "choices": [
            "display: flex",
            "position: flex",
            "flex: display",
            "layout: flex"
        ],
        "answer": "display: flex",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property changes text alignment?",
        "choices": [
            "text-align",
            "align-text",
            "font-align",
            "text-position"
        ],
        "answer": "text-align",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property rounds corners?",
        "choices": [
            "corner-radius",
            "border-radius",
            "radius",
            "box-radius"
        ],
        "answer": "border-radius",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property controls element transparency?",
        "choices": [
            "opacity",
            "transparent",
            "alpha",
            "visibility"
        ],
        "answer": "opacity",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which value hides an element but keeps its layout space?",
        "choices": [
            "display: none",
            "visibility: hidden",
            "hidden: true",
            "opacity: 0"
        ],
        "answer": "visibility: hidden",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which display value removes an element from layout?",
        "choices": [
            "visibility: hidden",
            "display: none",
            "opacity: 0",
            "remove"
        ],
        "answer": "display: none",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property changes an element's width?",
        "choices": [
            "size",
            "width",
            "element-width",
            "box-size"
        ],
        "answer": "width",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property changes an element's height?",
        "choices": [
            "height",
            "size-y",
            "element-height",
            "box-height"
        ],
        "answer": "height",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which property sets a background image?",
        "choices": [
            "background-image",
            "image-background",
            "bg-image",
            "background-src"
        ],
        "answer": "background-image",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which pseudo-class applies when the pointer is over an element?",
        "choices": [
            "::over",
            ":hover",
            ":mouse",
            ":pointer"
        ],
        "answer": ":hover",
        "topic": "css",
        "difficulty": "easy"
    },
    {
        "question": "Which layout system is primarily one-dimensional?",
        "choices": [
            "Grid",
            "Flexbox",
            "Table",
            "Float"
        ],
        "answer": "Flexbox",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which layout system is designed for two-dimensional layouts?",
        "choices": [
            "Flexbox",
            "Grid",
            "Inline",
            "Float"
        ],
        "answer": "Grid",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property changes the main-axis direction in flexbox?",
        "choices": [
            "flex-direction",
            "direction",
            "main-axis",
            "flex-flow-direction"
        ],
        "answer": "flex-direction",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property aligns flex items along the main axis?",
        "choices": [
            "align-items",
            "justify-content",
            "place-items",
            "main-align"
        ],
        "answer": "justify-content",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property aligns flex items along the cross axis?",
        "choices": [
            "justify-content",
            "align-items",
            "cross-align",
            "item-align"
        ],
        "answer": "align-items",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property controls gaps between grid/flex items?",
        "choices": [
            "gap",
            "space",
            "grid-gap-only",
            "item-space"
        ],
        "answer": "gap",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property controls stacking order?",
        "choices": [
            "stack",
            "z-index",
            "layer",
            "order-index"
        ],
        "answer": "z-index",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which position value keeps an element fixed to the viewport?",
        "choices": [
            "absolute",
            "fixed",
            "sticky",
            "relative"
        ],
        "answer": "fixed",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which position value keeps an element in normal flow and offsets it relative to itself?",
        "choices": [
            "relative",
            "absolute",
            "fixed",
            "static-offset"
        ],
        "answer": "relative",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property controls what happens when content overflows?",
        "choices": [
            "overflow",
            "over-content",
            "clip",
            "content-flow"
        ],
        "answer": "overflow",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which CSS function can calculate a value from multiple expressions?",
        "choices": [
            "calc()",
            "compute()",
            "math()",
            "value()"
        ],
        "answer": "calc()",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which unit is relative to the root element's font size?",
        "choices": [
            "em",
            "rem",
            "vh",
            "%"
        ],
        "answer": "rem",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which unit is relative to the viewport width?",
        "choices": [
            "vw",
            "vh",
            "vmin",
            "em"
        ],
        "answer": "vw",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which pseudo-element inserts generated content before an element's content?",
        "choices": [
            "::before",
            "::first",
            "::prepend",
            ":before-content"
        ],
        "answer": "::before",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property controls whether flex items wrap?",
        "choices": [
            "flex-wrap",
            "wrap",
            "item-wrap",
            "flex-flow-wrap"
        ],
        "answer": "flex-wrap",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property can set minimum width?",
        "choices": [
            "width-min",
            "min-width",
            "minimum",
            "min-size"
        ],
        "answer": "min-width",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which selector has higher specificity in general?",
        "choices": [
            "Element selector",
            "Class selector",
            "ID selector",
            "Universal selector"
        ],
        "answer": "ID selector",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property changes the typeface?",
        "choices": [
            "font-family",
            "font-type",
            "typeface",
            "font-style"
        ],
        "answer": "font-family",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which property controls line spacing?",
        "choices": [
            "line-height",
            "text-spacing",
            "line-space",
            "height-line"
        ],
        "answer": "line-height",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "Which media feature is commonly used for responsive breakpoints?",
        "choices": [
            "screen-width",
            "width",
            "max-width",
            "viewport-width"
        ],
        "answer": "max-width",
        "topic": "css",
        "difficulty": "medium"
    },
    {
        "question": "What does CSS specificity primarily determine?",
        "choices": [
            "Animation speed",
            "Which rule wins when declarations conflict",
            "File size",
            "Browser version"
        ],
        "answer": "Which rule wins when declarations conflict",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which selector has the highest specificity among these?",
        "choices": [
            "p",
            ".box",
            "#box",
            "*"
        ],
        "answer": "#box",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "What does box-sizing: border-box do?",
        "choices": [
            "Removes borders",
            "Includes padding and border in specified width/height",
            "Makes all boxes square",
            "Disables margin"
        ],
        "answer": "Includes padding and border in specified width/height",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property creates a new stacking context in some situations when combined with positioned elements?",
        "choices": [
            "z-index",
            "opacity",
            "color",
            "font-size"
        ],
        "answer": "z-index",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which function can define a CSS custom property fallback?",
        "choices": [
            "var(--x, fallback)",
            "custom(--x)",
            "fallback(--x)",
            "env(--x)"
        ],
        "answer": "var(--x, fallback)",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "How are CSS custom properties declared?",
        "choices": [
            "$name: value",
            "--name: value",
            "@name: value",
            "var-name: value"
        ],
        "answer": "--name: value",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "How is a CSS custom property read?",
        "choices": [
            "value(--name)",
            "var(--name)",
            "get(--name)",
            "prop(--name)"
        ],
        "answer": "var(--name)",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property can control whether an element can be resized by the user?",
        "choices": [
            "resize",
            "user-resize",
            "scale",
            "resizable"
        ],
        "answer": "resize",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which CSS feature lets an element interpolate between two states?",
        "choices": [
            "transition",
            "interpolation",
            "morph",
            "smooth"
        ],
        "answer": "transition",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which at-rule defines animation keyframes?",
        "choices": [
            "@animate",
            "@keyframes",
            "@frames",
            "@motion"
        ],
        "answer": "@keyframes",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property specifies the duration of a transition?",
        "choices": [
            "transition-time",
            "transition-duration",
            "duration",
            "animate-duration"
        ],
        "answer": "transition-duration",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property defines how a grid distributes tracks along the container's block axis?",
        "choices": [
            "align-content",
            "justify-content",
            "grid-content",
            "place-content-x"
        ],
        "answer": "align-content",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which pseudo-class selects an element when it is the first child?",
        "choices": [
            "::first-child",
            ":first-child",
            ":first",
            ":child-first"
        ],
        "answer": ":first-child",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which pseudo-class targets form controls with valid values under constraint validation?",
        "choices": [
            "::valid",
            ":valid",
            ":correct",
            ":validated"
        ],
        "answer": ":valid",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "What does overflow: auto generally do?",
        "choices": [
            "Always hides overflow",
            "Adds scrollbars only when needed",
            "Always adds scrollbars",
            "Expands the element"
        ],
        "answer": "Adds scrollbars only when needed",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property controls how an image fits inside a replaced element's box?",
        "choices": [
            "image-fit",
            "object-fit",
            "fit-image",
            "content-fit"
        ],
        "answer": "object-fit",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property controls an element's visual clipping region?",
        "choices": [
            "clip-path",
            "clip-region",
            "mask-box",
            "crop"
        ],
        "answer": "clip-path",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which CSS feature can adapt styles based on container size rather than viewport size?",
        "choices": [
            "Container queries",
            "Element queries only",
            "Size CSS",
            "Local media"
        ],
        "answer": "Container queries",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which property can change the order of flex/grid items?",
        "choices": [
            "order",
            "item-order",
            "position-order",
            "sequence"
        ],
        "answer": "order",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which value makes an element participate in normal flow while sticking after a threshold during scrolling?",
        "choices": [
            "fixed",
            "sticky",
            "absolute",
            "float"
        ],
        "answer": "sticky",
        "topic": "css",
        "difficulty": "hard"
    },
    {
        "question": "Which keyword declares a block-scoped variable that can be reassigned?",
        "choices": [
            "var",
            "let",
            "const",
            "define"
        ],
        "answer": "let",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword declares a block-scoped constant binding?",
        "choices": [
            "let",
            "const",
            "constant",
            "fixed"
        ],
        "answer": "const",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which operator checks value and type equality?",
        "choices": [
            "==",
            "=",
            "===",
            "!="
        ],
        "answer": "===",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method adds an item to the end of an array?",
        "choices": [
            "push()",
            "pop()",
            "append()",
            "add()"
        ],
        "answer": "push()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method removes the last array item?",
        "choices": [
            "remove()",
            "pop()",
            "deleteLast()",
            "shift()"
        ],
        "answer": "pop()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method removes the first array item?",
        "choices": [
            "shift()",
            "pop()",
            "removeFirst()",
            "unshift()"
        ],
        "answer": "shift()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method adds an item to the beginning of an array?",
        "choices": [
            "push()",
            "prepend()",
            "unshift()",
            "start()"
        ],
        "answer": "unshift()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which value represents an intentional absence of a value?",
        "choices": [
            "undefined",
            "null",
            "empty",
            "false"
        ],
        "answer": "null",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which type represents true/false values?",
        "choices": [
            "Boolean",
            "Binary",
            "Logical",
            "Bit"
        ],
        "answer": "Boolean",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method converts JSON text into a JavaScript object?",
        "choices": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.object()",
            "parse.JSON()"
        ],
        "answer": "JSON.parse()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method converts a JavaScript value to JSON text?",
        "choices": [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toText()",
            "stringify.JSON()"
        ],
        "answer": "JSON.stringify()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword exits a loop immediately?",
        "choices": [
            "stop",
            "break",
            "exit",
            "return-loop"
        ],
        "answer": "break",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword skips to the next loop iteration?",
        "choices": [
            "skip",
            "continue",
            "next",
            "pass"
        ],
        "answer": "continue",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which operator means logical AND?",
        "choices": [
            "||",
            "&&",
            "and",
            "&"
        ],
        "answer": "&&",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which operator means logical OR?",
        "choices": [
            "||",
            "&&",
            "or",
            "|"
        ],
        "answer": "||",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which function prints to the browser console?",
        "choices": [
            "print()",
            "console.log()",
            "log.console()",
            "write()"
        ],
        "answer": "console.log()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which symbol starts a single-line comment?",
        "choices": [
            "<!--",
            "//",
            "#",
            "/*"
        ],
        "answer": "//",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which symbol starts a multi-line comment?",
        "choices": [
            "//",
            "<!--",
            "/*",
            "#"
        ],
        "answer": "/*",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which method selects an element by its ID?",
        "choices": [
            "getElementById()",
            "queryId()",
            "selectId()",
            "findId()"
        ],
        "answer": "getElementById()",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword returns a value from a function?",
        "choices": [
            "give",
            "return",
            "yield-value",
            "output"
        ],
        "answer": "return",
        "topic": "javascript",
        "difficulty": "easy"
    },
    {
        "question": "What does Array.map() return?",
        "choices": [
            "The original array only",
            "A new array",
            "A number",
            "A boolean"
        ],
        "answer": "A new array",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does Array.filter() return?",
        "choices": [
            "A new array containing elements that pass a test",
            "The first element",
            "A string",
            "The original array only"
        ],
        "answer": "A new array containing elements that pass a test",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does Array.reduce() commonly produce?",
        "choices": [
            "A single accumulated result",
            "Only an array",
            "Only a string",
            "A DOM node"
        ],
        "answer": "A single accumulated result",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What is a closure?",
        "choices": [
            "A loop",
            "A function retaining access to its lexical environment",
            "A class constructor",
            "A promise state"
        ],
        "answer": "A function retaining access to its lexical environment",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does setTimeout() schedule?",
        "choices": [
            "Immediate execution",
            "A callback after at least the specified delay",
            "A synchronous pause",
            "A new thread"
        ],
        "answer": "A callback after at least the specified delay",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which object represents an eventual asynchronous result?",
        "choices": [
            "Future",
            "Promise",
            "AsyncResult",
            "DeferredValue"
        ],
        "answer": "Promise",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which keyword can pause an async function until a promise settles?",
        "choices": [
            "wait",
            "await",
            "pause",
            "defer"
        ],
        "answer": "await",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What must a function be for await to be used directly inside it?",
        "choices": [
            "It must be async",
            "It must be static",
            "It must be a generator",
            "It must be pure"
        ],
        "answer": "It must be async",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does typeof null return in JavaScript?",
        "choices": [
            "null",
            "object",
            "undefined",
            "boolean"
        ],
        "answer": "object",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which method creates a new array containing only selected elements?",
        "choices": [
            "filter()",
            "select()",
            "where()",
            "choose()"
        ],
        "answer": "filter()",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What is event bubbling?",
        "choices": [
            "Events moving from target toward ancestors",
            "Events moving only to siblings",
            "Events being deleted",
            "Events moving from document to target only"
        ],
        "answer": "Events moving from target toward ancestors",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which method attaches an event handler?",
        "choices": [
            "addEventListener()",
            "attach()",
            "listen()",
            "onEvent()"
        ],
        "answer": "addEventListener()",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What is destructuring?",
        "choices": [
            "Deleting an object",
            "Extracting values from arrays/objects into variables",
            "Converting JS to JSON",
            "Creating a DOM tree"
        ],
        "answer": "Extracting values from arrays/objects into variables",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which syntax defines a default parameter?",
        "choices": [
            "function f(x = 10)",
            "function f(default x 10)",
            "function f(x:10)",
            "function f(x default 10)"
        ],
        "answer": "function f(x = 10)",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does the spread syntax ... commonly do with an iterable?",
        "choices": [
            "Copies/expands its elements",
            "Deletes it",
            "Sorts it",
            "Freezes it"
        ],
        "answer": "Copies/expands its elements",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does Object.keys(obj) return?",
        "choices": [
            "An array of enumerable own property names",
            "Property values",
            "A JSON string",
            "All prototype methods"
        ],
        "answer": "An array of enumerable own property names",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What is NaN?",
        "choices": [
            "A number representing an invalid numeric result",
            "A string",
            "Null",
            "A function"
        ],
        "answer": "A number representing an invalid numeric result",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which operator provides a fallback only when the left side is null or undefined?",
        "choices": [
            "||",
            "??",
            "&&",
            "?."
        ],
        "answer": "??",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What does optional chaining obj?.x help avoid?",
        "choices": [
            "Syntax errors",
            "Errors from accessing a property through null/undefined",
            "All type errors",
            "Network errors"
        ],
        "answer": "Errors from accessing a property through null/undefined",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "Which statement is true about const objects?",
        "choices": [
            "Their properties can never change",
            "The binding cannot be reassigned, but object properties can change",
            "They are immutable",
            "They are frozen automatically"
        ],
        "answer": "The binding cannot be reassigned, but object properties can change",
        "topic": "javascript",
        "difficulty": "medium"
    },
    {
        "question": "What is the event loop primarily responsible for?",
        "choices": [
            "Coordinating the call stack and task queues",
            "Compiling CSS",
            "Creating database tables",
            "Encrypting variables"
        ],
        "answer": "Coordinating the call stack and task queues",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is the temporal dead zone associated with?",
        "choices": [
            "let and const",
            "var only",
            "functions only",
            "JSON"
        ],
        "answer": "let and const",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does Promise.all() do when one input promise rejects?",
        "choices": [
            "Waits forever",
            "Rejects the returned promise",
            "Ignores the rejection",
            "Resolves with null"
        ],
        "answer": "Rejects the returned promise",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does Promise.race() settle with?",
        "choices": [
            "The first input promise to settle",
            "The last promise",
            "All fulfilled promises",
            "Only rejected promises"
        ],
        "answer": "The first input promise to settle",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is prototypal inheritance?",
        "choices": [
            "Objects can inherit through prototype links",
            "Classes inherit only from HTML",
            "Functions cannot inherit",
            "A database technique"
        ],
        "answer": "Objects can inherit through prototype links",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does Object.create(proto) do?",
        "choices": [
            "Creates an object whose prototype is proto",
            "Clones proto deeply",
            "Freezes proto",
            "Converts proto to JSON"
        ],
        "answer": "Creates an object whose prototype is proto",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is hoisting best described as?",
        "choices": [
            "JavaScript's handling of declarations before execution of their surrounding code",
            "Moving all code to the top literally",
            "Sorting variables",
            "Compiling to machine code"
        ],
        "answer": "JavaScript's handling of declarations before execution of their surrounding code",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "Which declaration is hoisted but initialized with undefined?",
        "choices": [
            "var",
            "let",
            "const",
            "class"
        ],
        "answer": "var",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does bind() return?",
        "choices": [
            "A new function with a specified this value/arguments",
            "The function result immediately",
            "A promise",
            "An object copy"
        ],
        "answer": "A new function with a specified this value/arguments",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is a higher-order function?",
        "choices": [
            "A function that takes or returns functions",
            "A function with many lines",
            "A built-in function",
            "A recursive function only"
        ],
        "answer": "A function that takes or returns functions",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is debouncing?",
        "choices": [
            "Delaying execution until calls stop for a specified period",
            "Calling a function twice",
            "Sorting events",
            "Removing DOM nodes"
        ],
        "answer": "Delaying execution until calls stop for a specified period",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is throttling?",
        "choices": [
            "Limiting how often a function can execute",
            "Delaying every function forever",
            "Caching all results",
            "Removing duplicates from arrays"
        ],
        "answer": "Limiting how often a function can execute",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "Which queue is associated with promise reaction callbacks?",
        "choices": [
            "Microtask queue",
            "Render queue only",
            "File queue",
            "CSS queue"
        ],
        "answer": "Microtask queue",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is currying?",
        "choices": [
            "Transforming a multi-argument function into a sequence of single-argument functions",
            "Sorting arguments",
            "Calling a function recursively",
            "Converting functions to classes"
        ],
        "answer": "Transforming a multi-argument function into a sequence of single-argument functions",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is referential equality commonly used to compare?",
        "choices": [
            "Whether two references point to the same object",
            "Whether strings have the same length",
            "Whether numbers are prime",
            "Whether functions are async"
        ],
        "answer": "Whether two references point to the same object",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does Object.freeze() do at the top level?",
        "choices": [
            "Prevents adding/removing/changing own data properties through normal operations",
            "Deep-freezes every nested object",
            "Deletes the object",
            "Converts it to a string"
        ],
        "answer": "Prevents adding/removing/changing own data properties through normal operations",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does a generator function use to pause and resume execution?",
        "choices": [
            "yield",
            "await only",
            "pause",
            "resume"
        ],
        "answer": "yield",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does Symbol() create?",
        "choices": [
            "A unique primitive symbol value",
            "A unique object ID in a database",
            "A string only",
            "A promise"
        ],
        "answer": "A unique primitive symbol value",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What does strict mode help with?",
        "choices": [
            "It enables stricter parsing/runtime rules and catches some problematic actions",
            "It makes code faster always",
            "It disables errors",
            "It converts JS to TypeScript"
        ],
        "answer": "It enables stricter parsing/runtime rules and catches some problematic actions",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "What is tail-call optimization intended to reduce in supported implementations?",
        "choices": [
            "Stack growth from certain tail-recursive calls",
            "Network bandwidth",
            "DOM size",
            "Array length"
        ],
        "answer": "Stack growth from certain tail-recursive calls",
        "topic": "javascript",
        "difficulty": "hard"
    },
    {
        "question": "Which data structure follows LIFO?",
        "choices": [
            "Queue",
            "Stack",
            "Tree",
            "Graph"
        ],
        "answer": "Stack",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which data structure follows FIFO?",
        "choices": [
            "Stack",
            "Queue",
            "Tree",
            "Heap"
        ],
        "answer": "Queue",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which data structure stores key-value pairs conceptually?",
        "choices": [
            "Hash table",
            "Stack",
            "Queue",
            "Heap"
        ],
        "answer": "Hash table",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is the first index of a typical zero-based array?",
        "choices": [
            "0",
            "1",
            "-1",
            "Depends always"
        ],
        "answer": "0",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which traversal visits root, left, right?",
        "choices": [
            "Inorder",
            "Preorder",
            "Postorder",
            "Level order"
        ],
        "answer": "Preorder",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which traversal visits left, root, right?",
        "choices": [
            "Preorder",
            "Inorder",
            "Postorder",
            "Level order"
        ],
        "answer": "Inorder",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which traversal visits left, right, root?",
        "choices": [
            "Preorder",
            "Inorder",
            "Postorder",
            "Level order"
        ],
        "answer": "Postorder",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which structure is commonly used for BFS?",
        "choices": [
            "Stack",
            "Queue",
            "Heap",
            "Set"
        ],
        "answer": "Queue",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which structure is commonly used for DFS iteratively?",
        "choices": [
            "Queue",
            "Stack",
            "Heap",
            "Array only"
        ],
        "answer": "Stack",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is the average-case lookup complexity of a good hash table?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        "answer": "O(1)",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which sorting algorithm repeatedly selects the minimum remaining element?",
        "choices": [
            "Selection sort",
            "Merge sort",
            "Heap sort",
            "Quick sort"
        ],
        "answer": "Selection sort",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which sorting algorithm repeatedly swaps adjacent out-of-order elements?",
        "choices": [
            "Bubble sort",
            "Merge sort",
            "Radix sort",
            "Heap sort"
        ],
        "answer": "Bubble sort",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which sorting algorithm uses divide and conquer by merging sorted halves?",
        "choices": [
            "Merge sort",
            "Bubble sort",
            "Selection sort",
            "Counting sort"
        ],
        "answer": "Merge sort",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which search requires sorted data and repeatedly halves the search interval?",
        "choices": [
            "Linear search",
            "Binary search",
            "DFS",
            "Hash search"
        ],
        "answer": "Binary search",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is the worst-case time complexity of linear search?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(n)",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is the typical time complexity of accessing an array element by index?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        "answer": "O(1)",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which structure is used to represent hierarchical data?",
        "choices": [
            "Tree",
            "Queue",
            "Stack",
            "Hash only"
        ],
        "answer": "Tree",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is a node with no children called?",
        "choices": [
            "Root",
            "Leaf",
            "Parent",
            "Sibling"
        ],
        "answer": "Leaf",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "Which data structure is best suited for priority-based removal?",
        "choices": [
            "Priority queue",
            "Stack",
            "Simple queue",
            "Linked list"
        ],
        "answer": "Priority queue",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What does recursion mean?",
        "choices": [
            "A function calling itself directly or indirectly",
            "Sorting an array",
            "Using a queue",
            "Calling main only"
        ],
        "answer": "A function calling itself directly or indirectly",
        "topic": "dsa",
        "difficulty": "easy"
    },
    {
        "question": "What is the worst-case time complexity of merge sort?",
        "choices": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n²)"
        ],
        "answer": "O(n log n)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the average-case time complexity of quicksort?",
        "choices": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n²)"
        ],
        "answer": "O(n log n)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the worst-case time complexity of quicksort with poor pivots?",
        "choices": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(n²)"
        ],
        "answer": "O(n²)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which traversal is commonly used to evaluate an expression tree?",
        "choices": [
            "Postorder",
            "Preorder only",
            "Level order only",
            "Breadth-first only"
        ],
        "answer": "Postorder",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which tree property does a binary search tree maintain?",
        "choices": [
            "Left keys smaller and right keys larger than node key, under the usual convention",
            "All nodes have two children",
            "Every leaf is black",
            "Keys are random"
        ],
        "answer": "Left keys smaller and right keys larger than node key, under the usual convention",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the height of a balanced BST with n nodes asymptotically?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(log n)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which algorithm finds shortest paths from a source with non-negative edge weights?",
        "choices": [
            "Dijkstra",
            "DFS",
            "Kruskal",
            "Floyd only"
        ],
        "answer": "Dijkstra",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which algorithm is used for minimum spanning trees?",
        "choices": [
            "Kruskal",
            "Binary search",
            "KMP",
            "BFS only"
        ],
        "answer": "Kruskal",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which algorithm is another MST algorithm that grows a tree from a starting vertex?",
        "choices": [
            "Prim",
            "Dijkstra",
            "Bellman-Ford",
            "Floyd-Warshall"
        ],
        "answer": "Prim",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which algorithm handles negative edge weights for single-source shortest paths?",
        "choices": [
            "Bellman-Ford",
            "Binary search",
            "Prim",
            "Kruskal"
        ],
        "answer": "Bellman-Ford",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the average complexity of hash-table insertion with good hashing?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        "answer": "O(1)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which technique stores results of overlapping subproblems?",
        "choices": [
            "Dynamic programming",
            "Greedy only",
            "Backtracking only",
            "Hashing only"
        ],
        "answer": "Dynamic programming",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What does memoization usually mean?",
        "choices": [
            "Caching results of function calls",
            "Sorting input",
            "Removing recursion",
            "Building a heap"
        ],
        "answer": "Caching results of function calls",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What does a stable sorting algorithm preserve?",
        "choices": [
            "Relative order of equal-key elements",
            "Array size",
            "Memory address",
            "Pivot position"
        ],
        "answer": "Relative order of equal-key elements",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which sorting algorithm is generally in-place and has average O(n log n)?",
        "choices": [
            "Quicksort",
            "Merge sort",
            "Counting sort",
            "Radix sort"
        ],
        "answer": "Quicksort",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which data structure supports efficient min/max retrieval with heap property?",
        "choices": [
            "Heap",
            "Queue only",
            "Stack only",
            "Graph"
        ],
        "answer": "Heap",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the time complexity of BFS using adjacency lists?",
        "choices": [
            "O(V+E)",
            "O(V²E)",
            "O(log V)",
            "O(E²)"
        ],
        "answer": "O(V+E)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the time complexity of DFS using adjacency lists?",
        "choices": [
            "O(V+E)",
            "O(V²) always",
            "O(E log V)",
            "O(1)"
        ],
        "answer": "O(V+E)",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "Which technique explores choices and undoes them when they fail?",
        "choices": [
            "Backtracking",
            "Hashing",
            "Indexing",
            "Compilation"
        ],
        "answer": "Backtracking",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is a graph with edges that have direction called?",
        "choices": [
            "Directed graph",
            "Tree",
            "Undirected graph",
            "Complete graph"
        ],
        "answer": "Directed graph",
        "topic": "dsa",
        "difficulty": "medium"
    },
    {
        "question": "What is the amortized complexity of append to a dynamic array?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        "answer": "O(1)",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which data structure supports union and find operations efficiently?",
        "choices": [
            "Disjoint Set Union",
            "Trie",
            "Stack",
            "Deque"
        ],
        "answer": "Disjoint Set Union",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What does path compression improve in a disjoint-set structure?",
        "choices": [
            "Find operations",
            "Array indexing",
            "Sorting",
            "Hashing"
        ],
        "answer": "Find operations",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is the approximate time complexity of union-find with union by rank and path compression?",
        "choices": [
            "Nearly constant amortized time, O(alpha(n))",
            "O(n)",
            "O(log n) exactly",
            "O(n²)"
        ],
        "answer": "Nearly constant amortized time, O(alpha(n))",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which data structure is useful for prefix searches over strings?",
        "choices": [
            "Trie",
            "Heap",
            "Queue",
            "Stack"
        ],
        "answer": "Trie",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is the worst-case search time in an unbalanced BST with n nodes?",
        "choices": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(n)",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which self-balancing BST guarantees O(log n) height?",
        "choices": [
            "AVL tree",
            "Plain BST",
            "Linked list",
            "Binary heap"
        ],
        "answer": "AVL tree",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is a red-black tree?",
        "choices": [
            "A self-balancing binary search tree",
            "A graph algorithm",
            "A hash table",
            "A heap only"
        ],
        "answer": "A self-balancing binary search tree",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which algorithm computes all-pairs shortest paths in O(V^3) using the classic dynamic programming formulation?",
        "choices": [
            "Floyd-Warshall",
            "Dijkstra",
            "Prim",
            "Kruskal"
        ],
        "answer": "Floyd-Warshall",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which algorithm is suitable for finding strongly connected components?",
        "choices": [
            "Kosaraju's algorithm",
            "Kruskal",
            "Binary search",
            "Heap sort"
        ],
        "answer": "Kosaraju's algorithm",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is topological sorting applicable to?",
        "choices": [
            "Directed acyclic graphs",
            "Any undirected graph",
            "Only complete graphs",
            "Only trees with cycles"
        ],
        "answer": "Directed acyclic graphs",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which data structure can implement a monotonic queue for sliding-window maximum?",
        "choices": [
            "Deque",
            "Stack only",
            "Heap only",
            "Set only"
        ],
        "answer": "Deque",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is the classic time complexity of building a heap from n elements using bottom-up heapify?",
        "choices": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(n²)"
        ],
        "answer": "O(n)",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which technique is used by KMP to avoid rechecking characters?",
        "choices": [
            "Prefix/LPS table",
            "Heap property",
            "Hash chaining",
            "Union-find"
        ],
        "answer": "Prefix/LPS table",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What does the LPS array in KMP represent?",
        "choices": [
            "Longest proper prefix that is also a suffix",
            "Longest path in a graph",
            "Least prime sequence",
            "Last processed symbol"
        ],
        "answer": "Longest proper prefix that is also a suffix",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is the worst-case time complexity of KMP string matching?",
        "choices": [
            "O(n+m)",
            "O(nm)",
            "O(n²m)",
            "O(log n)"
        ],
        "answer": "O(n+m)",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which concept is central to Dijkstra's correctness?",
        "choices": [
            "Non-negative edge weights and greedy selection of the minimum tentative distance",
            "Negative cycles",
            "Random pivots",
            "Hash collisions"
        ],
        "answer": "Non-negative edge weights and greedy selection of the minimum tentative distance",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which graph representation can use O(V+E) space for sparse graphs?",
        "choices": [
            "Adjacency list",
            "Adjacency matrix",
            "Distance matrix",
            "Edge cube"
        ],
        "answer": "Adjacency list",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "Which problem is classically solved with a min-heap and greedy expansion?",
        "choices": [
            "Huffman coding",
            "Binary search",
            "Linear search",
            "Insertion sort"
        ],
        "answer": "Huffman coding",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What is the main goal of dynamic programming?",
        "choices": [
            "Exploit overlapping subproblems and optimal substructure",
            "Always avoid loops",
            "Always use recursion",
            "Use the largest local choice"
        ],
        "answer": "Exploit overlapping subproblems and optimal substructure",
        "topic": "dsa",
        "difficulty": "hard"
    },
    {
        "question": "What does OOP stand for?",
        "choices": [
            "Object-Oriented Programming",
            "Object-Only Process",
            "Ordered Object Programming",
            "Open Object Protocol"
        ],
        "answer": "Object-Oriented Programming",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which concept hides internal implementation details?",
        "choices": [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Compilation"
        ],
        "answer": "Encapsulation",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which concept allows a class to acquire properties from another class?",
        "choices": [
            "Inheritance",
            "Encapsulation",
            "Abstraction",
            "Overloading"
        ],
        "answer": "Inheritance",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which concept allows one interface to have multiple implementations?",
        "choices": [
            "Polymorphism",
            "Compilation",
            "Encapsulation",
            "Parsing"
        ],
        "answer": "Polymorphism",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword creates an object in Java?",
        "choices": [
            "new",
            "object",
            "create",
            "make"
        ],
        "answer": "new",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which method is called when a Java object is created?",
        "choices": [
            "Constructor",
            "Destructor",
            "Initializer only",
            "Finalizer"
        ],
        "answer": "Constructor",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which access modifier allows access from anywhere in Java?",
        "choices": [
            "private",
            "protected",
            "public",
            "default"
        ],
        "answer": "public",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which access modifier restricts direct access to the declaring class?",
        "choices": [
            "public",
            "private",
            "protected",
            "global"
        ],
        "answer": "private",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "What is a class?",
        "choices": [
            "A blueprint for objects",
            "An object instance only",
            "A variable",
            "A package"
        ],
        "answer": "A blueprint for objects",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "What is an object?",
        "choices": [
            "An instance of a class",
            "A class definition",
            "A method",
            "A package"
        ],
        "answer": "An instance of a class",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword refers to the current object in Java?",
        "choices": [
            "self",
            "this",
            "current",
            "object"
        ],
        "answer": "this",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword refers to the parent class in Java?",
        "choices": [
            "parent",
            "super",
            "base",
            "extends"
        ],
        "answer": "super",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword is used to inherit a class in Java?",
        "choices": [
            "inherits",
            "extends",
            "implements",
            "using"
        ],
        "answer": "extends",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword is used when a class implements an interface?",
        "choices": [
            "extends",
            "implements",
            "interface",
            "inherits"
        ],
        "answer": "implements",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Can Java support method overloading?",
        "choices": [
            "Yes",
            "No",
            "Only in interfaces",
            "Only in abstract classes"
        ],
        "answer": "Yes",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Can Java support method overriding?",
        "choices": [
            "Yes",
            "No",
            "Only for static methods",
            "Only for constructors"
        ],
        "answer": "Yes",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which concept combines data and methods in a class?",
        "choices": [
            "Encapsulation",
            "Inheritance",
            "Recursion",
            "Compilation"
        ],
        "answer": "Encapsulation",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which keyword prevents a class from being inherited in Java?",
        "choices": [
            "static",
            "final",
            "private",
            "sealed-only"
        ],
        "answer": "final",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "Which member belongs to the class rather than each object in Java?",
        "choices": [
            "static member",
            "local member",
            "instance-only member",
            "temporary member"
        ],
        "answer": "static member",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "What is an interface primarily used to define?",
        "choices": [
            "A contract of methods/behavior",
            "A database table",
            "An object instance",
            "A constructor body only"
        ],
        "answer": "A contract of methods/behavior",
        "topic": "oops",
        "difficulty": "easy"
    },
    {
        "question": "What is method overloading?",
        "choices": [
            "Same method name with different parameter lists",
            "Replacing a parent method",
            "Hiding a class",
            "Using many classes"
        ],
        "answer": "Same method name with different parameter lists",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is method overriding?",
        "choices": [
            "Subclass provides a new implementation of an inherited method",
            "Same method with different parameters",
            "Creating multiple constructors only",
            "Changing a variable type"
        ],
        "answer": "Subclass provides a new implementation of an inherited method",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is abstraction?",
        "choices": [
            "Showing essential behavior while hiding implementation details",
            "Copying objects",
            "Creating constructors",
            "Making variables public"
        ],
        "answer": "Showing essential behavior while hiding implementation details",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is dynamic method dispatch?",
        "choices": [
            "Runtime selection of an overridden method implementation",
            "Compile-time method selection only",
            "Variable initialization",
            "Memory allocation"
        ],
        "answer": "Runtime selection of an overridden method implementation",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which relationship is commonly described as IS-A?",
        "choices": [
            "Inheritance",
            "Composition",
            "Aggregation",
            "Association only"
        ],
        "answer": "Inheritance",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which relationship is commonly described as HAS-A?",
        "choices": [
            "Composition/Aggregation",
            "Inheritance",
            "Overriding",
            "Overloading"
        ],
        "answer": "Composition/Aggregation",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is composition?",
        "choices": [
            "A strong whole-part relationship where the part's lifecycle is tied to the whole",
            "A type of inheritance",
            "Method overloading",
            "Interface compilation"
        ],
        "answer": "A strong whole-part relationship where the part's lifecycle is tied to the whole",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is aggregation?",
        "choices": [
            "A weaker whole-part relationship where parts can exist independently",
            "A constructor",
            "Private inheritance",
            "Method overriding"
        ],
        "answer": "A weaker whole-part relationship where parts can exist independently",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which Java construct can have abstract methods and concrete methods?",
        "choices": [
            "Abstract class",
            "Primitive type",
            "Package",
            "Enum only"
        ],
        "answer": "Abstract class",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Can an abstract class be instantiated directly?",
        "choices": [
            "No",
            "Yes",
            "Only with new",
            "Only if final"
        ],
        "answer": "No",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Can an interface be instantiated directly?",
        "choices": [
            "No",
            "Yes",
            "Only if public",
            "Only if static"
        ],
        "answer": "No",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is constructor overloading?",
        "choices": [
            "Multiple constructors with different parameter lists",
            "Overriding a constructor",
            "A constructor inherited by all subclasses",
            "A static constructor"
        ],
        "answer": "Multiple constructors with different parameter lists",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which principle says a class should have one reason to change?",
        "choices": [
            "Single Responsibility Principle",
            "Open/Closed Principle",
            "Liskov Principle",
            "Dependency Inversion"
        ],
        "answer": "Single Responsibility Principle",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which SOLID principle says software entities should be open for extension but closed for modification?",
        "choices": [
            "SRP",
            "OCP",
            "LSP",
            "ISP"
        ],
        "answer": "OCP",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which SOLID principle concerns substitutability of subtypes?",
        "choices": [
            "LSP",
            "SRP",
            "DIP",
            "OCP"
        ],
        "answer": "LSP",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which principle suggests clients should not depend on methods they do not use?",
        "choices": [
            "ISP",
            "SRP",
            "OCP",
            "LSP"
        ],
        "answer": "ISP",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which principle encourages dependence on abstractions rather than concrete implementations?",
        "choices": [
            "DIP",
            "SRP",
            "ISP",
            "LSP"
        ],
        "answer": "DIP",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is coupling?",
        "choices": [
            "Degree of dependency between modules/classes",
            "Internal cohesion of one class",
            "Number of methods only",
            "Inheritance depth only"
        ],
        "answer": "Degree of dependency between modules/classes",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is cohesion?",
        "choices": [
            "How closely related responsibilities within a module are",
            "Dependency between modules",
            "Number of classes",
            "Inheritance level"
        ],
        "answer": "How closely related responsibilities within a module are",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "What is an immutable object?",
        "choices": [
            "An object whose state cannot be changed after creation",
            "An object with no methods",
            "An object that is always static",
            "An object that can never be referenced"
        ],
        "answer": "An object whose state cannot be changed after creation",
        "topic": "oops",
        "difficulty": "medium"
    },
    {
        "question": "Which principle favors composition over deep inheritance hierarchies?",
        "choices": [
            "Composition over inheritance",
            "Encapsulation over abstraction",
            "Polymorphism over interfaces",
            "Inheritance over composition"
        ],
        "answer": "Composition over inheritance",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is covariance in return types?",
        "choices": [
            "An overriding method may return a subtype of the parent's return type where allowed",
            "Changing parameter types arbitrarily",
            "Using private methods",
            "Changing constructors"
        ],
        "answer": "An overriding method may return a subtype of the parent's return type where allowed",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is contravariance generally concerned with?",
        "choices": [
            "Using a less specific type in certain input positions",
            "Making return types more specific",
            "Changing access modifiers only",
            "Object cloning"
        ],
        "answer": "Using a less specific type in certain input positions",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is the diamond problem?",
        "choices": [
            "Ambiguity caused by multiple inheritance paths to the same base class",
            "A sorting problem",
            "A database anomaly",
            "A memory leak"
        ],
        "answer": "Ambiguity caused by multiple inheritance paths to the same base class",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which Java feature helps resolve default-method conflicts in interfaces?",
        "choices": [
            "Explicit overriding in the implementing class",
            "Garbage collection",
            "Packages",
            "Annotations only"
        ],
        "answer": "Explicit overriding in the implementing class",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is dependency injection?",
        "choices": [
            "Supplying an object's dependencies from outside rather than constructing them internally",
            "Copying an object",
            "Creating a subclass automatically",
            "Encrypting dependencies"
        ],
        "answer": "Supplying an object's dependencies from outside rather than constructing them internally",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which design pattern ensures a class has a single shared instance?",
        "choices": [
            "Singleton",
            "Factory",
            "Observer",
            "Adapter"
        ],
        "answer": "Singleton",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern creates objects without exposing exact instantiation logic to clients?",
        "choices": [
            "Factory",
            "Observer",
            "Strategy",
            "Decorator"
        ],
        "answer": "Factory",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern defines a one-to-many dependency so observers are notified of changes?",
        "choices": [
            "Observer",
            "Factory",
            "Adapter",
            "Builder"
        ],
        "answer": "Observer",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern lets behavior be selected interchangeably at runtime?",
        "choices": [
            "Strategy",
            "Singleton",
            "Prototype",
            "Facade"
        ],
        "answer": "Strategy",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern adds responsibilities to an object dynamically?",
        "choices": [
            "Decorator",
            "Factory",
            "Observer",
            "Iterator"
        ],
        "answer": "Decorator",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern converts one interface into another expected by a client?",
        "choices": [
            "Adapter",
            "Bridge",
            "Builder",
            "Prototype"
        ],
        "answer": "Adapter",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern separates abstraction from implementation so they can vary independently?",
        "choices": [
            "Bridge",
            "Singleton",
            "Observer",
            "Iterator"
        ],
        "answer": "Bridge",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Which pattern simplifies access to a complex subsystem?",
        "choices": [
            "Facade",
            "Factory",
            "Strategy",
            "State"
        ],
        "answer": "Facade",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is object slicing in languages supporting value-based inheritance such as C++?",
        "choices": [
            "Loss of derived-specific state when copied into a base object by value",
            "Deleting an object",
            "Splitting a class",
            "Thread slicing"
        ],
        "answer": "Loss of derived-specific state when copied into a base object by value",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is virtual dispatch primarily used for?",
        "choices": [
            "Runtime polymorphic method selection",
            "Compile-time constant folding",
            "Memory allocation only",
            "Package loading"
        ],
        "answer": "Runtime polymorphic method selection",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "Why are virtual destructors useful in C++ base classes?",
        "choices": [
            "They allow correct derived destructors to run when deleting through a base pointer",
            "They prevent all destruction",
            "They improve sorting",
            "They make classes abstract automatically"
        ],
        "answer": "They allow correct derived destructors to run when deleting through a base pointer",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is the Law of Demeter broadly about?",
        "choices": [
            "Limiting knowledge/dependencies between objects",
            "Using many inheritance levels",
            "Making every field public",
            "Avoiding interfaces"
        ],
        "answer": "Limiting knowledge/dependencies between objects",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What does loose coupling generally improve?",
        "choices": [
            "Replaceability, testing, and maintainability",
            "Memory usage always",
            "CPU frequency",
            "Syntax validity"
        ],
        "answer": "Replaceability, testing, and maintainability",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What is an abstract data type?",
        "choices": [
            "A specification of data and allowed operations independent of implementation",
            "A concrete array only",
            "A class with no methods",
            "A primitive type"
        ],
        "answer": "A specification of data and allowed operations independent of implementation",
        "topic": "oops",
        "difficulty": "hard"
    },
    {
        "question": "What does LAN stand for?",
        "choices": [
            "Local Area Network",
            "Large Access Network",
            "Logical Area Node",
            "Local Access Node"
        ],
        "answer": "Local Area Network",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which device forwards packets between different networks?",
        "choices": [
            "Switch",
            "Router",
            "Hub",
            "Repeater"
        ],
        "answer": "Router",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which device commonly connects devices within a LAN using MAC addresses?",
        "choices": [
            "Router",
            "Switch",
            "Modem",
            "Repeater"
        ],
        "answer": "Switch",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which layer of OSI is responsible for routing?",
        "choices": [
            "Physical",
            "Data Link",
            "Network",
            "Application"
        ],
        "answer": "Network",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol translates domain names to IP addresses?",
        "choices": [
            "DNS",
            "DHCP",
            "FTP",
            "ARP"
        ],
        "answer": "DNS",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol automatically assigns IP configuration?",
        "choices": [
            "DNS",
            "DHCP",
            "HTTP",
            "ARP"
        ],
        "answer": "DHCP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol maps an IPv4 address to a MAC address on a local network?",
        "choices": [
            "ARP",
            "DNS",
            "FTP",
            "SMTP"
        ],
        "answer": "ARP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "What does IP stand for?",
        "choices": [
            "Internet Protocol",
            "Internal Process",
            "Internet Port",
            "Interface Protocol"
        ],
        "answer": "Internet Protocol",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is connection-oriented?",
        "choices": [
            "UDP",
            "TCP",
            "IP",
            "ICMP"
        ],
        "answer": "TCP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is connectionless at the transport layer?",
        "choices": [
            "TCP",
            "UDP",
            "FTP",
            "HTTP"
        ],
        "answer": "UDP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is commonly used to transfer web pages securely?",
        "choices": [
            "HTTPS",
            "FTP",
            "SMTP",
            "Telnet"
        ],
        "answer": "HTTPS",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is used to send email between mail servers?",
        "choices": [
            "SMTP",
            "POP3",
            "IMAP",
            "DNS"
        ],
        "answer": "SMTP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is commonly used to retrieve email while keeping messages on the server?",
        "choices": [
            "IMAP",
            "SMTP",
            "ARP",
            "DHCP"
        ],
        "answer": "IMAP",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "What is the default port for HTTP?",
        "choices": [
            "80",
            "443",
            "21",
            "25"
        ],
        "answer": "80",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "What is the default port for HTTPS?",
        "choices": [
            "80",
            "443",
            "22",
            "53"
        ],
        "answer": "443",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which layer handles MAC addressing in the OSI model?",
        "choices": [
            "Network",
            "Data Link",
            "Transport",
            "Session"
        ],
        "answer": "Data Link",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which topology connects all devices to a central device?",
        "choices": [
            "Bus",
            "Ring",
            "Star",
            "Mesh"
        ],
        "answer": "Star",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "What is bandwidth?",
        "choices": [
            "Maximum data-carrying capacity of a communication channel",
            "Actual packet count",
            "IP address size",
            "Delay only"
        ],
        "answer": "Maximum data-carrying capacity of a communication channel",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "What is latency?",
        "choices": [
            "Time delay in data transmission",
            "Maximum bandwidth",
            "Packet size",
            "Number of ports"
        ],
        "answer": "Time delay in data transmission",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which protocol is used for secure remote login?",
        "choices": [
            "SSH",
            "HTTP",
            "FTP",
            "ARP"
        ],
        "answer": "SSH",
        "topic": "computer-networks",
        "difficulty": "easy"
    },
    {
        "question": "Which OSI layer is responsible for end-to-end reliable delivery?",
        "choices": [
            "Network",
            "Transport",
            "Session",
            "Data Link"
        ],
        "answer": "Transport",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which TCP mechanism controls the amount of unacknowledged data in transit?",
        "choices": [
            "Sliding window",
            "ARP",
            "DNS",
            "CSMA"
        ],
        "answer": "Sliding window",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What is the purpose of TCP three-way handshake?",
        "choices": [
            "Establish a TCP connection and synchronize sequence numbers",
            "Encrypt HTTP",
            "Assign IP addresses",
            "Resolve DNS"
        ],
        "answer": "Establish a TCP connection and synchronize sequence numbers",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which flags are used in the classic TCP three-way handshake?",
        "choices": [
            "SYN, SYN-ACK, ACK",
            "FIN, FIN-ACK, ACK",
            "RST, ACK, FIN",
            "PSH, URG, SYN"
        ],
        "answer": "SYN, SYN-ACK, ACK",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which protocol maps IPv4 addresses to MAC addresses?",
        "choices": [
            "ARP",
            "RARP",
            "DNS",
            "ICMP"
        ],
        "answer": "ARP",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What is subnetting used for?",
        "choices": [
            "Dividing an IP network into smaller logical networks",
            "Encrypting packets",
            "Increasing cable length",
            "Replacing DNS"
        ],
        "answer": "Dividing an IP network into smaller logical networks",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which address is used for loopback in IPv4?",
        "choices": [
            "127.0.0.1",
            "0.0.0.0",
            "255.255.255.255",
            "192.168.0.1"
        ],
        "answer": "127.0.0.1",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which IPv4 address is commonly used as the limited broadcast address?",
        "choices": [
            "255.255.255.255",
            "127.0.0.1",
            "0.0.0.0",
            "224.0.0.1"
        ],
        "answer": "255.255.255.255",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which routing algorithm repeatedly chooses the lowest tentative distance?",
        "choices": [
            "Dijkstra",
            "Bellman-Ford",
            "Flooding",
            "Random walk"
        ],
        "answer": "Dijkstra",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which routing algorithm is based on distance vectors and can handle negative edge weights in abstract graph problems?",
        "choices": [
            "Bellman-Ford",
            "Dijkstra",
            "Prim",
            "Kruskal"
        ],
        "answer": "Bellman-Ford",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What does NAT commonly do?",
        "choices": [
            "Translates between address spaces, often private and public IPv4 addresses",
            "Encrypts DNS",
            "Compresses files",
            "Controls CPU scheduling"
        ],
        "answer": "Translates between address spaces, often private and public IPv4 addresses",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which protocol reports network-layer errors and diagnostics?",
        "choices": [
            "ICMP",
            "TCP",
            "ARP",
            "FTP"
        ],
        "answer": "ICMP",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What is the purpose of CSMA/CD in classic shared Ethernet?",
        "choices": [
            "Detect collisions on a shared medium and recover",
            "Encrypt traffic",
            "Assign IPs",
            "Resolve names"
        ],
        "answer": "Detect collisions on a shared medium and recover",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What does CSMA/CA attempt to do in Wi-Fi?",
        "choices": [
            "Avoid collisions before transmission",
            "Detect collisions after every frame",
            "Assign MAC addresses",
            "Route packets"
        ],
        "answer": "Avoid collisions before transmission",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which protocol provides reliable byte-stream transport?",
        "choices": [
            "TCP",
            "UDP",
            "IP",
            "ICMP"
        ],
        "answer": "TCP",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What is multiplexing at the transport layer based largely on?",
        "choices": [
            "Port numbers",
            "MAC addresses",
            "DNS names",
            "Frame checksums"
        ],
        "answer": "Port numbers",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which device operates primarily at OSI Layer 3?",
        "choices": [
            "Router",
            "Hub",
            "Repeater",
            "Layer-1 bridge"
        ],
        "answer": "Router",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which device operates primarily at OSI Layer 2?",
        "choices": [
            "Switch",
            "Router",
            "Repeater",
            "Modem only"
        ],
        "answer": "Switch",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What is packet switching?",
        "choices": [
            "Dividing data into packets that share network resources",
            "Using one dedicated circuit always",
            "Encrypting a packet",
            "Converting IP to MAC"
        ],
        "answer": "Dividing data into packets that share network resources",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "Which IPv6 feature removes the need for broadcast as used in IPv4?",
        "choices": [
            "Multicast/anycast mechanisms instead of broadcast",
            "ARP broadcast",
            "NAT",
            "TCP"
        ],
        "answer": "Multicast/anycast mechanisms instead of broadcast",
        "topic": "computer-networks",
        "difficulty": "medium"
    },
    {
        "question": "What problem does TCP congestion control primarily address?",
        "choices": [
            "Preventing excessive traffic from overwhelming the network",
            "Assigning MAC addresses",
            "Resolving names",
            "Encrypting payloads"
        ],
        "answer": "Preventing excessive traffic from overwhelming the network",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is TCP slow start?",
        "choices": [
            "A congestion-control phase that increases the congestion window rapidly at first, subject to the algorithm's rules",
            "A delay before DNS",
            "A Wi-Fi sleep mode",
            "A routing protocol"
        ],
        "answer": "A congestion-control phase that increases the congestion window rapidly at first, subject to the algorithm's rules",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What does the TCP retransmission timeout help determine?",
        "choices": [
            "When an unacknowledged segment should be retransmitted",
            "When to assign an IP",
            "When DNS expires",
            "When a port is created"
        ],
        "answer": "When an unacknowledged segment should be retransmitted",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is CIDR notation /24 indicating?",
        "choices": [
            "A 24-bit network prefix",
            "24 hosts exactly",
            "24 routers",
            "24 bytes of payload"
        ],
        "answer": "A 24-bit network prefix",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "How many usable host addresses are in a traditional /24 IPv4 subnet?",
        "choices": [
            "254",
            "256",
            "252",
            "128"
        ],
        "answer": "254",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "How many usable host addresses are in a traditional /26 IPv4 subnet?",
        "choices": [
            "62",
            "64",
            "60",
            "32"
        ],
        "answer": "62",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is route aggregation?",
        "choices": [
            "Combining multiple routes into a summarized prefix",
            "Splitting one subnet into hosts",
            "Encrypting routes",
            "Removing routing tables"
        ],
        "answer": "Combining multiple routes into a summarized prefix",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "Which routing protocol is a link-state interior gateway protocol?",
        "choices": [
            "OSPF",
            "RIP",
            "BGP",
            "ARP"
        ],
        "answer": "OSPF",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "Which protocol is commonly used for inter-domain routing on the Internet?",
        "choices": [
            "BGP",
            "OSPF",
            "RIP",
            "DHCP"
        ],
        "answer": "BGP",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is the count-to-infinity problem associated with?",
        "choices": [
            "Distance-vector routing",
            "Link-state routing",
            "Ethernet switching",
            "DNS"
        ],
        "answer": "Distance-vector routing",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "Which technique can mitigate the count-to-infinity problem in distance-vector routing?",
        "choices": [
            "Split horizon",
            "Flooding only",
            "NAT",
            "ARP cache"
        ],
        "answer": "Split horizon",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What does OSPF use to calculate shortest paths?",
        "choices": [
            "Dijkstra's SPF algorithm",
            "Bellman-Ford only",
            "Kruskal",
            "Prim"
        ],
        "answer": "Dijkstra's SPF algorithm",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is MTU?",
        "choices": [
            "Maximum Transmission Unit",
            "Minimum Transfer User",
            "Maximum TCP Utility",
            "Message Transport Unit only"
        ],
        "answer": "Maximum Transmission Unit",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is fragmentation in IPv4?",
        "choices": [
            "Splitting an IP datagram into smaller fragments when needed",
            "Splitting TCP ports",
            "Breaking a DNS name",
            "Dividing a MAC address"
        ],
        "answer": "Splitting an IP datagram into smaller fragments when needed",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "Which IPv6 address type identifies one interface among multiple interfaces and routes to the nearest one?",
        "choices": [
            "Anycast",
            "Broadcast",
            "Multicast only",
            "Loopback only"
        ],
        "answer": "Anycast",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is a VLAN primarily used for?",
        "choices": [
            "Logical segmentation of a Layer-2 network",
            "Increasing CPU speed",
            "Replacing IP",
            "Encrypting disks"
        ],
        "answer": "Logical segmentation of a Layer-2 network",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is 802.1Q associated with?",
        "choices": [
            "VLAN tagging",
            "Wi-Fi encryption",
            "TCP congestion control",
            "DNS"
        ],
        "answer": "VLAN tagging",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What does ARP spoofing exploit?",
        "choices": [
            "The lack of authentication in traditional ARP mappings",
            "TCP three-way handshake",
            "DNSSEC",
            "IPv6 routing"
        ],
        "answer": "The lack of authentication in traditional ARP mappings",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is a default gateway?",
        "choices": [
            "A router/interface used to reach destinations outside the local subnet",
            "A DNS server only",
            "A MAC address",
            "A switch port"
        ],
        "answer": "A router/interface used to reach destinations outside the local subnet",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is the purpose of a checksum in network protocols?",
        "choices": [
            "Detect certain transmission errors",
            "Encrypt data",
            "Assign IP addresses",
            "Choose routes"
        ],
        "answer": "Detect certain transmission errors",
        "topic": "computer-networks",
        "difficulty": "hard"
    },
    {
        "question": "What is an operating system?",
        "choices": [
            "Software that manages computer hardware and provides services to programs",
            "A compiler only",
            "A database",
            "A web browser"
        ],
        "answer": "Software that manages computer hardware and provides services to programs",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which component manages processes and hardware resources?",
        "choices": [
            "Kernel",
            "Browser",
            "Shell script only",
            "Editor"
        ],
        "answer": "Kernel",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is a process?",
        "choices": [
            "A program in execution",
            "A source code file only",
            "A CPU register",
            "A directory"
        ],
        "answer": "A program in execution",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is a thread?",
        "choices": [
            "A unit of execution within a process",
            "A disk partition",
            "A file",
            "A network cable"
        ],
        "answer": "A unit of execution within a process",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which scheduling algorithm serves processes in arrival order?",
        "choices": [
            "FCFS",
            "SJF",
            "Round Robin",
            "Priority only"
        ],
        "answer": "FCFS",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which scheduling algorithm uses a fixed time quantum?",
        "choices": [
            "Round Robin",
            "FCFS",
            "SJF",
            "FIFO disk only"
        ],
        "answer": "Round Robin",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which memory is fastest among these?",
        "choices": [
            "Cache",
            "Hard disk",
            "SSD",
            "USB"
        ],
        "answer": "Cache",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is virtual memory?",
        "choices": [
            "A memory-management technique using secondary storage to extend apparent memory",
            "A faster CPU",
            "A cache only",
            "A network drive only"
        ],
        "answer": "A memory-management technique using secondary storage to extend apparent memory",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is a file system?",
        "choices": [
            "A method for organizing and managing files on storage",
            "A CPU scheduler",
            "A compiler",
            "A protocol"
        ],
        "answer": "A method for organizing and managing files on storage",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is deadlock?",
        "choices": [
            "A state where processes wait indefinitely for resources held by one another",
            "A fast process",
            "A memory allocation",
            "A successful schedule"
        ],
        "answer": "A state where processes wait indefinitely for resources held by one another",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which is a common process state?",
        "choices": [
            "Ready",
            "Compiled",
            "Deleted-only",
            "Printed"
        ],
        "answer": "Ready",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is context switching?",
        "choices": [
            "Saving/restoring execution state when switching between processes or threads",
            "Changing file formats",
            "Switching users only",
            "Changing IP addresses"
        ],
        "answer": "Saving/restoring execution state when switching between processes or threads",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which scheduling goal attempts to minimize time from submission to completion?",
        "choices": [
            "Turnaround time",
            "Bandwidth",
            "Page size",
            "Cache hit rate"
        ],
        "answer": "Turnaround time",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which scheduling metric measures time spent waiting in the ready queue?",
        "choices": [
            "Waiting time",
            "Response size",
            "Page time",
            "Seek distance"
        ],
        "answer": "Waiting time",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is paging?",
        "choices": [
            "Memory management that divides memory into fixed-size pages/frames",
            "Disk formatting",
            "CPU pipelining",
            "File compression"
        ],
        "answer": "Memory management that divides memory into fixed-size pages/frames",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is a page fault?",
        "choices": [
            "An access to a page not currently in physical memory",
            "A CPU failure",
            "A disk deletion",
            "A syntax error"
        ],
        "answer": "An access to a page not currently in physical memory",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is a system call?",
        "choices": [
            "A controlled interface through which a program requests OS services",
            "A hardware cable",
            "A compiler optimization",
            "A network packet"
        ],
        "answer": "A controlled interface through which a program requests OS services",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which OS component manages files and directories?",
        "choices": [
            "File system",
            "ALU",
            "Compiler",
            "BIOS only"
        ],
        "answer": "File system",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "What is multitasking?",
        "choices": [
            "Running multiple tasks by sharing CPU time/resources",
            "Using multiple monitors",
            "Installing many programs",
            "Using only one process"
        ],
        "answer": "Running multiple tasks by sharing CPU time/resources",
        "topic": "operating-systems",
        "difficulty": "easy"
    },
    {
        "question": "Which scheduling algorithm selects the shortest estimated CPU burst?",
        "choices": [
            "SJF",
            "FCFS",
            "Round Robin",
            "FIFO"
        ],
        "answer": "SJF",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is starvation in scheduling?",
        "choices": [
            "A process waits indefinitely or for an excessively long time",
            "A process uses no memory",
            "The CPU is idle",
            "A process terminates normally"
        ],
        "answer": "A process waits indefinitely or for an excessively long time",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which technique can reduce starvation in priority scheduling?",
        "choices": [
            "Aging",
            "Paging",
            "Spooling",
            "Compaction"
        ],
        "answer": "Aging",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is preemptive scheduling?",
        "choices": [
            "The OS can interrupt a running process to schedule another",
            "Processes always run to completion",
            "Only I/O can stop processes",
            "No context switches occur"
        ],
        "answer": "The OS can interrupt a running process to schedule another",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is a semaphore?",
        "choices": [
            "A synchronization primitive used to control access to shared resources",
            "A file type",
            "A CPU register only",
            "A page table"
        ],
        "answer": "A synchronization primitive used to control access to shared resources",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is a mutex primarily used for?",
        "choices": [
            "Mutual exclusion when accessing a critical section",
            "Memory compression",
            "Disk partitioning",
            "Process creation only"
        ],
        "answer": "Mutual exclusion when accessing a critical section",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is a critical section?",
        "choices": [
            "Code that accesses shared resources and requires synchronization",
            "A boot sector",
            "A page table",
            "A file header"
        ],
        "answer": "Code that accesses shared resources and requires synchronization",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is a race condition?",
        "choices": [
            "Program behavior depends on the timing/order of concurrent accesses",
            "A CPU overclock",
            "A disk error",
            "A memory page"
        ],
        "answer": "Program behavior depends on the timing/order of concurrent accesses",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which condition is necessary for deadlock?",
        "choices": [
            "Mutual exclusion",
            "Infinite memory",
            "No waiting",
            "No resources"
        ],
        "answer": "Mutual exclusion",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which is NOT one of the four Coffman deadlock conditions?",
        "choices": [
            "Circular wait",
            "Mutual exclusion",
            "Hold and wait",
            "Infinite CPU speed"
        ],
        "answer": "Infinite CPU speed",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is deadlock prevention?",
        "choices": [
            "Designing the system so at least one necessary deadlock condition cannot hold",
            "Detecting deadlock after it occurs",
            "Ignoring deadlocks",
            "Increasing RAM only"
        ],
        "answer": "Designing the system so at least one necessary deadlock condition cannot hold",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is deadlock avoidance?",
        "choices": [
            "Making allocation decisions that keep the system in a safe state",
            "Deleting all processes",
            "Ignoring resource requests",
            "Disabling scheduling"
        ],
        "answer": "Making allocation decisions that keep the system in a safe state",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which algorithm is associated with deadlock avoidance?",
        "choices": [
            "Banker's algorithm",
            "Dijkstra's shortest path",
            "Kruskal",
            "KMP"
        ],
        "answer": "Banker's algorithm",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is external fragmentation?",
        "choices": [
            "Free memory exists in separated blocks that may not satisfy a contiguous request",
            "Unused bits inside allocated blocks",
            "No free memory",
            "A CPU cache miss"
        ],
        "answer": "Free memory exists in separated blocks that may not satisfy a contiguous request",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is internal fragmentation?",
        "choices": [
            "Unused space inside an allocated fixed-size block",
            "Free blocks between allocations",
            "A page fault",
            "A disk seek"
        ],
        "answer": "Unused space inside an allocated fixed-size block",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which page replacement algorithm replaces the page that has not been used for the longest time?",
        "choices": [
            "LRU",
            "FIFO",
            "Optimal",
            "Random"
        ],
        "answer": "LRU",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "Which page replacement algorithm is theoretical and replaces the page whose next use is farthest in the future?",
        "choices": [
            "Optimal",
            "FIFO",
            "LRU",
            "Clock"
        ],
        "answer": "Optimal",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is thrashing?",
        "choices": [
            "Excessive paging that leaves little useful CPU work",
            "Fast scheduling",
            "Disk formatting",
            "A deadlock only"
        ],
        "answer": "Excessive paging that leaves little useful CPU work",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is demand paging?",
        "choices": [
            "Loading a page into memory when it is needed",
            "Loading every page at startup",
            "Deleting unused pages",
            "Compressing pages"
        ],
        "answer": "Loading a page into memory when it is needed",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is IPC?",
        "choices": [
            "Inter-Process Communication",
            "Internal Page Cache",
            "Instruction Process Control",
            "Input Port Connection"
        ],
        "answer": "Inter-Process Communication",
        "topic": "operating-systems",
        "difficulty": "medium"
    },
    {
        "question": "What is a safe state in deadlock avoidance?",
        "choices": [
            "A state from which there exists some order allowing all processes to complete",
            "A state with no processes",
            "A state with all resources free",
            "A state with maximum CPU use"
        ],
        "answer": "A state from which there exists some order allowing all processes to complete",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is the Banker’s algorithm based on?",
        "choices": [
            "Checking whether granting a request leaves a safe state",
            "FIFO page replacement",
            "Shortest job scheduling",
            "Disk scheduling"
        ],
        "answer": "Checking whether granting a request leaves a safe state",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is the purpose of a page table?",
        "choices": [
            "Map virtual pages to physical frames",
            "Map files to users",
            "Map ports to sockets",
            "Map processes to CPUs only"
        ],
        "answer": "Map virtual pages to physical frames",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a TLB?",
        "choices": [
            "A cache of recent virtual-to-physical address translations",
            "A disk buffer",
            "A scheduler",
            "A file table"
        ],
        "answer": "A cache of recent virtual-to-physical address translations",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What does copy-on-write mean?",
        "choices": [
            "Shared pages are copied only when a process attempts to modify them",
            "All pages are copied immediately",
            "Files are copied to disk",
            "Memory is never shared"
        ],
        "answer": "Shared pages are copied only when a process attempts to modify them",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a page replacement anomaly commonly associated with FIFO?",
        "choices": [
            "Belady's anomaly",
            "Dijkstra anomaly",
            "Deadlock anomaly",
            "Cache anomaly"
        ],
        "answer": "Belady's anomaly",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What does working-set theory attempt to track?",
        "choices": [
            "Pages actively used by a process during a recent time window",
            "All files on disk",
            "CPU temperature",
            "Network packets"
        ],
        "answer": "Pages actively used by a process during a recent time window",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a monolithic kernel?",
        "choices": [
            "A kernel architecture where many OS services run in kernel space",
            "A kernel with no drivers",
            "A user-space-only kernel",
            "A hardware-only kernel"
        ],
        "answer": "A kernel architecture where many OS services run in kernel space",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a microkernel approach?",
        "choices": [
            "Keeping a minimal core in kernel space and moving many services to user space",
            "Putting every application in kernel space",
            "Removing process management",
            "Using no IPC"
        ],
        "answer": "Keeping a minimal core in kernel space and moving many services to user space",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a context switch overhead?",
        "choices": [
            "Time spent saving/restoring execution state rather than doing application work",
            "Disk capacity",
            "Network latency only",
            "Compilation time"
        ],
        "answer": "Time spent saving/restoring execution state rather than doing application work",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is priority inversion?",
        "choices": [
            "A high-priority task waits for a lower-priority task holding a needed resource",
            "A low-priority task always runs first",
            "All tasks have equal priority",
            "A process changes its PID"
        ],
        "answer": "A high-priority task waits for a lower-priority task holding a needed resource",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "Which technique can help mitigate priority inversion?",
        "choices": [
            "Priority inheritance",
            "Paging",
            "Spooling",
            "Round Robin only"
        ],
        "answer": "Priority inheritance",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a zombie process in Unix-like systems?",
        "choices": [
            "A terminated process whose parent has not yet collected its exit status",
            "A running process with no memory",
            "A kernel thread",
            "A blocked I/O request"
        ],
        "answer": "A terminated process whose parent has not yet collected its exit status",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is an orphan process?",
        "choices": [
            "A process whose original parent has terminated",
            "A process with no files",
            "A process with no stack",
            "A terminated zombie only"
        ],
        "answer": "A process whose original parent has terminated",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a kernel thread?",
        "choices": [
            "A thread managed/scheduled by the kernel",
            "A thread stored on disk",
            "A user-only script",
            "A network packet"
        ],
        "answer": "A thread managed/scheduled by the kernel",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is memory-mapped I/O?",
        "choices": [
            "Mapping device registers into an address space so CPU instructions access them as memory",
            "Mapping files to DNS",
            "Mapping RAM to CPU cache only",
            "Mapping processes to ports"
        ],
        "answer": "Mapping device registers into an address space so CPU instructions access them as memory",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is DMA?",
        "choices": [
            "Direct Memory Access, allowing devices to transfer data to/from memory with limited CPU intervention",
            "Dynamic Memory Allocation",
            "Disk Memory Algorithm",
            "Direct Machine Addressing"
        ],
        "answer": "Direct Memory Access, allowing devices to transfer data to/from memory with limited CPU intervention",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a reentrant function?",
        "choices": [
            "A function that can be safely entered again before a previous invocation completes",
            "A recursive function only",
            "A function with no parameters",
            "A kernel-only function"
        ],
        "answer": "A function that can be safely entered again before a previous invocation completes",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is a condition variable used for?",
        "choices": [
            "Allowing threads to wait for a condition while cooperating with a mutex",
            "Replacing the CPU scheduler",
            "Allocating disk blocks",
            "Creating page tables"
        ],
        "answer": "Allowing threads to wait for a condition while cooperating with a mutex",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is the main purpose of a scheduler?",
        "choices": [
            "Choose which runnable process/thread should execute next",
            "Allocate IP addresses",
            "Format disks",
            "Compile programs"
        ],
        "answer": "Choose which runnable process/thread should execute next",
        "topic": "operating-systems",
        "difficulty": "hard"
    },
    {
        "question": "What is 20% of 150?",
        "choices": [
            "20",
            "30",
            "35",
            "40"
        ],
        "answer": "30",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 15 + 27?",
        "choices": [
            "40",
            "41",
            "42",
            "43"
        ],
        "answer": "42",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 12 × 8?",
        "choices": [
            "86",
            "96",
            "108",
            "112"
        ],
        "answer": "96",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 144 ÷ 12?",
        "choices": [
            "10",
            "11",
            "12",
            "14"
        ],
        "answer": "12",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the average of 10 and 20?",
        "choices": [
            "10",
            "15",
            "20",
            "30"
        ],
        "answer": "15",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "If a pen costs ₹20, what is the cost of 5 pens?",
        "choices": [
            "₹80",
            "₹90",
            "₹100",
            "₹120"
        ],
        "answer": "₹100",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 3/4 as a percentage?",
        "choices": [
            "25%",
            "50%",
            "75%",
            "80%"
        ],
        "answer": "75%",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the next number: 2, 4, 6, 8, ?",
        "choices": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "10",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "If x + 7 = 15, x is?",
        "choices": [
            "6",
            "7",
            "8",
            "9"
        ],
        "answer": "8",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "A train travels 60 km in 2 hours. Its speed is?",
        "choices": [
            "20 km/h",
            "30 km/h",
            "40 km/h",
            "60 km/h"
        ],
        "answer": "30 km/h",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 25% of 200?",
        "choices": [
            "25",
            "40",
            "50",
            "75"
        ],
        "answer": "50",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the HCF of 12 and 18?",
        "choices": [
            "3",
            "6",
            "9",
            "12"
        ],
        "answer": "6",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the LCM of 4 and 6?",
        "choices": [
            "8",
            "10",
            "12",
            "24"
        ],
        "answer": "12",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "If today is Monday, what day is after 3 days?",
        "choices": [
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "answer": "Thursday",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "A ratio of 2:3 has total parts equal to?",
        "choices": [
            "2",
            "3",
            "5",
            "6"
        ],
        "answer": "5",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is 10²?",
        "choices": [
            "20",
            "50",
            "100",
            "1000"
        ],
        "answer": "100",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "If 5 workers each have 2 books, total books are?",
        "choices": [
            "7",
            "10",
            "12",
            "15"
        ],
        "answer": "10",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "Which is the smallest prime number?",
        "choices": [
            "0",
            "1",
            "2",
            "3"
        ],
        "answer": "2",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the perimeter of a square with side 5 cm?",
        "choices": [
            "10 cm",
            "15 cm",
            "20 cm",
            "25 cm"
        ],
        "answer": "20 cm",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "What is the simple interest on ₹1000 at 10% per year for 1 year?",
        "choices": [
            "₹10",
            "₹50",
            "₹100",
            "₹110"
        ],
        "answer": "₹100",
        "topic": "aptitude",
        "difficulty": "easy"
    },
    {
        "question": "A product costing ₹800 is sold at ₹920. Profit percentage is?",
        "choices": [
            "10%",
            "12%",
            "15%",
            "20%"
        ],
        "answer": "15%",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A number is increased from 200 to 250. Percentage increase?",
        "choices": [
            "20%",
            "25%",
            "30%",
            "50%"
        ],
        "answer": "25%",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "The average of 12, 18 and 30 is?",
        "choices": [
            "18",
            "20",
            "22",
            "24"
        ],
        "answer": "20",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A train travels 240 km in 4 hours. Speed?",
        "choices": [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        "answer": "60 km/h",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "If A:B = 3:5 and A = 18, B =?",
        "choices": [
            "24",
            "30",
            "36",
            "40"
        ],
        "answer": "30",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A can complete a job in 10 days. Work done in one day?",
        "choices": [
            "1/5",
            "1/10",
            "1/20",
            "10"
        ],
        "answer": "1/10",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "If 6 workers complete a job in 12 days, assuming equal rates, 12 workers need?",
        "choices": [
            "3 days",
            "6 days",
            "12 days",
            "24 days"
        ],
        "answer": "6 days",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "What is the compound amount on ₹1000 at 10% for 2 years, annually compounded?",
        "choices": [
            "₹1200",
            "₹1210",
            "₹1220",
            "₹1100"
        ],
        "answer": "₹1210",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A shop gives 20% discount on ₹1500. Selling price?",
        "choices": [
            "₹1100",
            "₹1200",
            "₹1250",
            "₹1300"
        ],
        "answer": "₹1200",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A number is divisible by 3 if?",
        "choices": [
            "Its last digit is even",
            "Sum of digits is divisible by 3",
            "It ends in 0",
            "It has an even number of digits"
        ],
        "answer": "Sum of digits is divisible by 3",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "If 3x = 27, x =?",
        "choices": [
            "6",
            "7",
            "8",
            "9"
        ],
        "answer": "9",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A boat moves 10 km/h in still water and stream speed is 2 km/h. Downstream speed?",
        "choices": [
            "8",
            "10",
            "12",
            "20"
        ],
        "answer": "12",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "If a:b = 4:7 and b:c = 7:9, then a:c =?",
        "choices": [
            "4:9",
            "7:9",
            "4:7",
            "28:63"
        ],
        "answer": "4:9",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "The probability of getting a head on a fair coin is?",
        "choices": [
            "0",
            "1/4",
            "1/2",
            "1"
        ],
        "answer": "1/2",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "How many ways can 3 distinct books be arranged on a shelf?",
        "choices": [
            "3",
            "6",
            "9",
            "12"
        ],
        "answer": "6",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "What is the median of 3, 7, 9, 12, 15?",
        "choices": [
            "7",
            "9",
            "12",
            "15"
        ],
        "answer": "9",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A car travels 150 km at 50 km/h. Time taken?",
        "choices": [
            "2 h",
            "3 h",
            "4 h",
            "5 h"
        ],
        "answer": "3 h",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "If 40% of a number is 80, the number is?",
        "choices": [
            "160",
            "180",
            "200",
            "240"
        ],
        "answer": "200",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "What is the next term: 5, 10, 20, 40, ?",
        "choices": [
            "60",
            "70",
            "80",
            "100"
        ],
        "answer": "80",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A sum of ₹5000 is divided in ratio 2:3. Larger share?",
        "choices": [
            "₹2000",
            "₹2500",
            "₹3000",
            "₹3500"
        ],
        "answer": "₹3000",
        "topic": "aptitude",
        "difficulty": "medium"
    },
    {
        "question": "A and B can complete a job in 12 and 18 days respectively. Together they take?",
        "choices": [
            "6.2 days",
            "7.2 days",
            "8 days",
            "9 days"
        ],
        "answer": "7.2 days",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A pipe fills a tank in 8 hours and another in 12 hours. Together they fill it in?",
        "choices": [
            "4.8 hours",
            "5 hours",
            "6 hours",
            "10 hours"
        ],
        "answer": "4.8 hours",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If a number is increased by 20% and then decreased by 20%, net change is?",
        "choices": [
            "0%",
            "4% increase",
            "4% decrease",
            "8% decrease"
        ],
        "answer": "4% decrease",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A train 180 m long crosses a pole in 9 seconds. Speed?",
        "choices": [
            "15 m/s",
            "20 m/s",
            "25 m/s",
            "30 m/s"
        ],
        "answer": "20 m/s",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "At simple interest, a sum doubles in 8 years. Rate per annum?",
        "choices": [
            "8%",
            "10%",
            "12.5%",
            "15%"
        ],
        "answer": "12.5%",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A mixture has milk:water = 5:2. If total is 28 L, milk is?",
        "choices": [
            "10 L",
            "15 L",
            "20 L",
            "25 L"
        ],
        "answer": "20 L",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If x:y = 2:3 and y:z = 4:5, x:z =?",
        "choices": [
            "8:15",
            "2:5",
            "3:5",
            "4:15"
        ],
        "answer": "8:15",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "How many distinct arrangements of the letters in CAT are possible?",
        "choices": [
            "3",
            "6",
            "9",
            "12"
        ],
        "answer": "6",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A bag contains 5 red and 3 blue balls. Probability of drawing red?",
        "choices": [
            "3/8",
            "5/8",
            "1/2",
            "5/3"
        ],
        "answer": "5/8",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "The roots of x² - 5x + 6 = 0 are?",
        "choices": [
            "1,6",
            "2,3",
            "-2,-3",
            "3,4"
        ],
        "answer": "2,3",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If log10(1000) = ?",
        "choices": [
            "1",
            "2",
            "3",
            "10"
        ],
        "answer": "3",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A man spends 75% of his income and saves ₹5000. Income is?",
        "choices": [
            "₹10000",
            "₹15000",
            "₹20000",
            "₹25000"
        ],
        "answer": "₹20000",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A 20% discount followed by 10% discount is equivalent to a single discount of?",
        "choices": [
            "28%",
            "30%",
            "32%",
            "18%"
        ],
        "answer": "28%",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If 8 machines produce 480 units in 6 hours, at same rate 12 machines in 5 hours produce?",
        "choices": [
            "500",
            "600",
            "720",
            "800"
        ],
        "answer": "600",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A clock gains 5 minutes every hour. How many minutes does it gain in 12 hours?",
        "choices": [
            "30",
            "45",
            "60",
            "75"
        ],
        "answer": "60",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A two-digit number has digits whose sum is 9. Reversing digits increases the number by 27. Original number?",
        "choices": [
            "36",
            "45",
            "54",
            "63"
        ],
        "answer": "36",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If 2^x = 32, x =?",
        "choices": [
            "4",
            "5",
            "6",
            "8"
        ],
        "answer": "5",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "The ratio of areas of two circles with radii 3 and 6 is?",
        "choices": [
            "1:2",
            "1:3",
            "1:4",
            "1:6"
        ],
        "answer": "1:4",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "A can do a work in 15 days and B in 10 days. B works alone for 2 days, then A joins. Total time?",
        "choices": [
            "6.8 days",
            "7.2 days",
            "8 days",
            "9 days"
        ],
        "answer": "6.8 days",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "If the average of 8 numbers is 15, their total is?",
        "choices": [
            "100",
            "120",
            "140",
            "160"
        ],
        "answer": "120",
        "topic": "aptitude",
        "difficulty": "hard"
    },
    {
        "question": "Which OS service allows a user to interact with the operating system through commands?",
        "choices": [
            "Shell",
            "Scheduler",
            "Page table",
            "Device driver"
        ],
        "answer": "Shell",
        "topic": "operating-systems",
        "difficulty": "easy"
    }
];
