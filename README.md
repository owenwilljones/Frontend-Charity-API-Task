# Owen Jones Frontend Interview Task

### Installation and Usage

First install the project locally, either using npm or yarn

```
yarn install
```

To start the dev server simply run `start`, again either using npm or yarn

```
yarn start
```

You can build the project and create a production dist folder by running `build`

```
yarn build
```

You can run the tests associated with this project by running `test`

```
yarn test
```

### Additional Notes

* I chose to use webpack alongside babel for the development and building of this SPA. I chose this based on personal experience and because I feel that these tools are presently industry standard and are proven to add value to the development process.
* I chose to use Styled Components to manage the majority of the styling within this SPA. I chose this because I feel that within the context of react, scoping styling to reusable components make the process of constructing parent components more fluid and minimises markup fatigue (everything having to have a className attribute).
* I chose to use Jest and Enzyme for unit testing. I chose Jest based on personal familiarity but also because it has a rich mocking ecosystem that is ideal for the API scenario presented in this task. I chose Enzyme additionally for it's functionality for easily testing react components.
* There are only 4 donations displayed on this SPA because of the endpoint I am using. The /charity/donations endpoint returns the latest 4 celebrity donations to a particular charity. I had hoped to find an endpoint which showed any number of latest donations. Having more donor cards on the SPA may impact UX but I presently can't make an informed decision about this. In a real world scenario, I would attempt to open up a dialog with whoever owns the API architecture to assess value in having the endpoint specified here.
* A possible future feature would be to automatically eliminate duplicates during the mounting process. On the SPA, the first 3 donor cards are the same donation duplicated.