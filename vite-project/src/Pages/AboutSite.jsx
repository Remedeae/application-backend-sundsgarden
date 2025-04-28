

function AboutSite() {

    return (
        <div className="about-site">
            <div className="banner">
                <h1>About this Site</h1>
            </div>
            <div>
                <h2>From Scratch</h2>
                <p>
                    This project was written visual studio code and initialized as a vite project to set up a react app with javascript as language. The react-router-DOM was installed to handle the navigation.
                </p>
                <p>
                    All the pages were compartmentalized into jsx-files, which could then be imported into the  app.jsx. Here the browserrouter was set up to contain the navbar component on the top, the  individual page(via the routes) and then the footer at the end. <br />
                    Each jsx file contains first the import of any assets (images in this case). After this follows the exportable function. In this function we first find the javascript needed for each page, followed by a return statement containing all of the html code.
                </p>
                <p>
                    For the aboutApplicant.jsx there was some proper javascript, to make an image slideshow. I created an object with arrays containing corresponding info about each picture, then made a useState hook that is updated with the onClick property of the arrow icons in the html, and use this hook to step through the array and insert the info from the object into the html. The stepping function also has a stop at 0 and the end of the array to prevent null from being returned.
                </p>
                <p>
                    For the CSS a scss system was set up using Prepros to run the operation. Each jsx component got its own compartment, and in the html every compartment's main parent div got a class. This class was then used in every scss compartment to nest in the rest of the function, this so that none of the styling would spill over when merged in the final style sheet. For global styles they were added before the individual imports into the main scss file, so the individual styles could override the global styles. Reset and a variables component was inserted into the top, with the variables containing fonts and colors that would be recurring in the page. <br />
                    The BAM method was also used for classes in the html, for easier nesting. Icons and fonts were imported from external sources and added in the meta tag in the index.html. For the mobile experience some breakpoints were added to rearrange the layout and adjust the font size. <br />
                    Finally this was all compiled into index.css and directly exported into the main.jsx.
                </p>
            </div>
            <div>
                <h3>Github</h3>
                <p>Find the Github reposotory for this page <a href="https://github.com/Remedeae/application-backend-sundsgarden">here</a>.</p>
            </div>
        </div>
    )
}

export default AboutSite 