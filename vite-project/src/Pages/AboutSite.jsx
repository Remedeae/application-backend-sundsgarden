

function AboutSite() {

    return (
        <div className="about-site">
            <div>
                <h2>About this site</h2>
                <p>
                    To start the creation of the site I installed npm via the terminal in Visual Studio Code, from there I installed Vite and created a react app with javascript as language. After this I installed the React Router DOM for navigation between the pages. The initially generated code was then cleaned up.
                </p>
                <p>
                    Then the actual project started with setting up jsx files with the components (navbar, footer and the pages). Each component contained a function that returned html code, which was then exported.
                    In the App.jsx all the components were imported and the router-dom was set up using the BrowserRouter. Navbar and footer were placed outside of the Routes tag so they’d show up on every page.
                    The navbar is as per standard an unordered list with list items for the internal links, but just a plain a tag for the external link to the github. For the icon a script from fontawesome was added to the head in the index.hml, which allowed for an import into the i tag.
                </p>
                <p>
                    For the CSS the SCSS system was used with Prepros running the conversion. Every component plus the reset css and variables got their own _component.scss file that was then imported into the index.scss and via Prepros converted into a complete index.css, ready to be directly imported into the main.jsx.
                    To give the document a global styling _reset.scss was imported first and then the global styles were applied directly into the index.scss, followed by importing all the components. To not create any conflicting issues once all the components were fed into the index.css, the outer div of every component got a className corresponding to the component. This was then used to create nested css so every component could be styled individually.
                </p>
            </div>
            <div>
                <h3>Github</h3>
                <p>Find more of my work on my <a href="https://github.com/Remedeae">Github</a></p>
            </div>
        </div>
    )
}

export default AboutSite 