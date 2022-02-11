import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Post() {
  return (
    <div>
      <Header
        isLoggedIn={false}
        className="border-b-gray-600 bg-slate-800 text-gray-200"
      />

      <div className="mx-auto mb-10 mt-8 max-w-4xl px-4 py-4">
        <div className="prose prose-indigo max-w-none prose-code:bg-slate-200 prose-code:py-0.5 prose-code:px-1 prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-['']">
          <img
            className="aspect-video w-full object-cover"
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777695/0408-FlutterMessangerDemo-Luke_Social-e8a0e8ddab86b503a125ebcad823c583.png"
            alt="header image"
          />

          <div className="mb-20">
            <div className="mb-2 text-sm text-gray-500">
              23rd Mar 2021 &middot; 350 likes
            </div>
            <h1 className="font-serif">Creating Your First Flutter App</h1>

            <div className="flex items-stretch divide-x divide-gray-300 space-x-6">
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    className="rounded-full h-10 w-10 object-cover my-0"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="test"
                  />
                </div>
                <div className="text-left">
                  <div className="text-gray-800 leading-5">Calvin Hawkins</div>
                  <div className="text-sm text-gray-500">@calvin.hawkins</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 pl-6">
                <div>
                  <img
                    className="rounded-full h-10 w-10 object-cover my-0"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="test"
                  />
                </div>
                <div className="text-left">
                  <div className="text-gray-800 leading-5">Kristen Ramos</div>
                  <div className="text-sm text-gray-500">@kristen.ramos</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 id="what-is-flutter">What is Flutter?</h2>

            <p>
              Flutter is Google’s mobile app development SDK that allows your
              product to target both Android and iOS platforms simultaneously,
              without the need to maintain two separate codebases. Furthermore,
              apps using Flutter can also be compiled to target Google’s
              upcoming{" "}
              <a
                href="https://en.wikipedia.org/wiki/Google_Fuchsia"
                rel="noopener noreferrer"
              >
                Fuchsia operating system
              </a>
              .
            </p>

            <p>
              Flutter recently hit a major milestone - stable version 1.0. The
              release took place in London, December 5th, 2018, at the{" "}
              <a
                href="https://developers.googleblog.com/2018/12/flutter-10-googles-portable-ui-toolkit.html"
                rel="noopener noreferrer"
              >
                Flutter Live event
              </a>
              . While it can still be regarded as an early and evolving software
              venture, this article will focus on an already proven concept and
              demonstrate how to develop a fully-functional messaging app that
              targets both major mobile platforms using{" "}
              <a
                href="https://developers.googleblog.com/2019/02/launching-flutter-12-at-mobile-world.html"
                rel="noopener noreferrer"
              >
                Flutter 1.2
              </a>{" "}
              and{" "}
              <a href="https://firebase.google.com/" rel="noopener noreferrer">
                Firebase
              </a>
              .
            </p>

            <p>
              As can be seen from the chart below, Flutter has been gaining a
              lot of users in recent months. In 2018, Flutter’s market share
              doubled and it is on track to surpass React Native in terms of
              search queries, hence our decision to create a new Flutter
              tutorial.
            </p>

            <figure className="blog_post_image-container">
              <img
                src="https://uploads.toptal.io/blog/image/129547/toptal-blog-image-1554819532638-87eed08d41f3b4e2669a0bb9732ecaf7.png"
                className="deferred_image is-loaded"
                alt="Chart comparing Flutter and React users from July through September 2018."
              />
            </figure>

            <p>
              <strong>Note:</strong>{" "}
              <em>
                This article focuses only on certain bits of the implementation.
                Full source code reference for the project can be found in{" "}
                <a
                  href="https://github.com/nstosic/toptal-flutter-chat"
                  rel="noopener noreferrer"
                >
                  this GitHub repo
                </a>
                .
              </em>
            </p>

            <h2 id="prerequisites">Prerequisites</h2>

            <p>
              Even though effort has been made to allow readers to follow and
              accomplish this project even if it’s their first attempt at mobile
              development, a lot of core mobile development concepts that aren’t
              Flutter-specific are mentioned and used without detailed
              explanation.
            </p>

            <p>
              This has been undertaken for article brevity as one of its
              objectives is for the reader to complete the project in one
              sitting. Finally, the article assumes you already have your
              development environment set up, including the required Android
              Studio plugins and Flutter SDK.
            </p>

            <h2 id="firebase-set-up">Firebase Set Up</h2>

            <p>
              Setting up Firebase is the only thing that we have to do
              independently for each platform. First of all, make sure you
              create a new project in the{" "}
              <a
                href="https://console.firebase.google.com"
                rel="noopener noreferrer"
              >
                Firebase Dashboard
              </a>{" "}
              and add Android and iOS applications in the newly generated
              workspace. The platform will produce two configuration files that
              you need to download: <code>google-services.json</code> for
              Android and <code>GoogleService-Info.plist</code> for iOS. Before
              closing the dashboard, make sure to enable Firebase and Google
              authentication providers as we’ll use them for user
              identification. To do this, choose the Authentication item from
              the menu and then select the Sign-In method tab.
            </p>

            <p>
              Now you can close the dashboard as the rest of the set up takes
              place in our codebase. First of all, we need to put the files we
              downloaded in our project. The <code>google-services.json</code>{" "}
              file should be placed in the{" "}
              <code>$(FLUTTER_PROJECT_ROOT)/android/app</code> folder and{" "}
              <code>GoogleService-Info.plist</code> should be placed in the{" "}
              <code>$(FLUTTER_PROJECT_ROOT)/ios/Runner</code> directory. Next,
              we need to actually set up the Firebase libraries we’re going to
              use in the project and hook them up with the configuration files.
              This is done by specifying the Dart packages (libraries) we’ll be
              using in our project’s <code>pubspec.yaml</code> file. In the
              dependencies section of the file, paste the following snippet:
            </p>

            <p>
              The first two aren’t related to Firebase but are going to be
              frequently used in the project. The last two are, hopefully,
              self-explanatory.
            </p>

            <p>
              Finally, we need to configure platform-specific project settings
              that will enable our authentication flow to complete successfully.
              On the Android side, we need to add the google-services Gradle
              plugin to our project-level Gradle configuration. In other words,
              we need to add the following item to the dependency list in{" "}
              <code>$(FLUTTER_PROJECT_ROOT)/android/build.gradle</code> file:
            </p>

            <p>
              Then we need to apply that plugin by adding this line to the end
              of <code>$(FLUTTER_PROJECT_ROOT)/android/app/build.gradle</code>:
            </p>

            <p>
              The last thing for this platform is to enlist your Facebook
              application parameters. What we are looking for here is editing
              these two files -{" "}
              <code>
                $(FLUTTER_PROJECT_ROOT)/android/app/src/main/AndroidManifest.xml
              </code>{" "}
              and{" "}
              <code>
                $(FLUTTER_PROJECT_ROOT)/android/app/src/main/res/values/strings.xml
              </code>
              :
            </p>

            <h2 id="a-word-on-bloc-architecture">
              A Word on BLoC Architecture
            </h2>

            <p>
              This architecture standard was described in one of our previous
              articles, demonstrating the use of{" "}
              <a href="https://www.toptal.com/cross-platform/code-sharing-angular-dart-flutter-bloc">
                BLoC for code sharing in Flutter and AngularDart
              </a>
              , so we won’t be explaining it in detail here.
            </p>

            <p>
              The basic idea behind the main idea is that every screen has the
              following classes: - <strong>view</strong> - which is responsible
              for displaying the current state and delegating user input as
              events to bloc. - <strong>state</strong> - which represents “live”
              data that the user interacts with using the current view. -{" "}
              <strong>bloc</strong> - which responds to events and updates the
              state accordingly, optionally requesting data from one or many
              local or remote repositories. - <strong>event</strong> - which is
              a definite action result that may or may not change the current
              state.
            </p>

            <p>As a graphic representation, it can be thought of like this:</p>

            <p></p>
            <figure className="blog_post_image-container">
              <img
                src="https://uploads.toptal.io/blog/image/129548/toptal-blog-image-1554819545460-6874eaf4ff9b0dea34958ef4fce0b711.png"
                className="deferred_image is-loaded"
                alt="Flutter Tutorial: Graphic representation of the BLoC architecture."
              />
            </figure>
            <p></p>

            <p>
              Additionally, we have a <em>model</em> directory which contains
              data classes and repositories that produce instances of these
              classes.
            </p>

            <h2 id="ui-development">UI Development</h2>

            <p>
              Creating UI using Flutter is done completely in Dart, as opposed
              to native app development in Android and iOS where the UI is built
              using the XML scheme and is completely separated from the business
              logic codebase. We’re going to use relatively simple UI element
              compositions with different components based on the current state
              (e.g. isLoading, isEmpty parameters). The UI in Flutter revolves
              around widgets, or rather the widget tree. Widgets can either be
              stateless or stateful. When it comes to stateful ones, it’s
              important to stress that, when <code>setState()</code> is called
              on a particular widget that is currently displayed (calling it in
              the constructor or after it’s disposed results in a runtime
              error), a build and draw pass is scheduled to be performed on next
              drawing cycle.
            </p>

            <p>
              For brevity, we’ll only show one of the UI (view) classes here:
            </p>

            <p>
              The rest of the UI classes follow the same patterns but perhaps
              have different actions and might feature an empty state widget
              tree in addition to loading state.
            </p>

            <h2 id="authentication">Authentication</h2>

            <p>
              As you may have guessed, we’ll be using{" "}
              <code>google_sign_in</code> and{" "}
              <code>flutter_facebook_login</code> libraries to authenticate the
              user by relying on their social network profile. First of all,
              make sure to import these packages into the file that’s going to
              handle the login request logic:
            </p>

            <pre>
              <code className="language-js hljs">
                <span className="hljs-keyword">import</span>{" "}
                <span className="hljs-string">
                  package:flutter_facebook_login/flutter_facebook_login.dart
                </span>
                ;<span className="hljs-keyword">import</span>{" "}
                <span className="hljs-string">
                  package:google_sign_in/google_sign_in.dart
                </span>
                ;
              </code>
            </pre>

            <p>
              Now, we’re going to have two independent parts that are going to
              take care of our authentication flow. The first one is going to
              initiate either a Facebook or Google sign-in request:
            </p>

            <p>
              The second one is going to be called when we get the profile data
              from either provider. We’re going to accomplish this by
              instructing our login handler to listen to{" "}
              <code>firebase_auth onAuthStateChange</code> stream:
            </p>

            <p>
              The <code>UserRepo</code> and <code>LoginRepo</code>{" "}
              implementation will not be posted here, but feel free to take a
              look at{" "}
              <a
                href="https://github.com/nstosic/toptal-flutter-chat"
                rel="noopener noreferrer"
              >
                the GitHub repo
              </a>{" "}
              for full reference.
            </p>

            <h2 id="flutter-tutorial-how-to-build-an-instant-messaging-app">
              Flutter Tutorial: How to Build an Instant Messaging App
            </h2>

            <p>
              Finally, we get to the interesting part. As the name implies, the
              messages should be exchanged as fast as possible, ideally, this
              should be <em>instant</em>. Luckily, <code>cloud_firestore</code>{" "}
              allows us to interact with Firestore instance and we can use its{" "}
              <code>snapshots()</code> feature to open a data stream that will
              give us updates in real time. In my opinion, all the{" "}
              <code>chat_repo</code> code is pretty straightforward with the
              exception of the <code>startChatroomForUsers</code> method. It is
              responsible for creating a new chat room for two users unless
              there’s an existing one that contains both users (as we don’t want
              to have multiple instances of the same user pair) in which case it
              returns the existing chat room.
            </p>

            <p>
              However, due to the design of Firestore, it currently doesn’t
              support nested <code>array-contains</code> queries. So we cannot
              retrieve the appropriate data stream but need to perform
              additional filtering on our side. That solution consists of
              retrieving all the chatrooms for the logged in user and then
              searching for the one that also contains the selected user:
            </p>

            <p>
              Also, due to similar design constraints, Firebase currently
              doesn’t support array updates (inserting new element in an
              existing array field value) with special{" "}
              <code>FieldValue.serverTimestamp()</code> value.
            </p>

            <p>
              This value indicates to the platform that the field that contains
              this instead of an actual value should be populated with the
              actual timestamp on the server at the moment the transaction takes
              place. Instead, we’re using <code>DateTime.now()</code> at the
              moment we’re creating our new message serialized object and
              inserting that object into the chat room messages collection.
            </p>

            <h2 id="wrapping-up">Wrapping Up</h2>

            <p>
              Obviously, the Flutter messaging app we developed is more of a
              proof-of-concept than a market-ready instant messaging
              application. As ideas for further development, one might consider
              introducing end-to-end encryption or rich content (group chats,
              media attachments, URL parsing). But before all that, one should
              implement push notifications as they’re pretty much a must-have
              feature for an instant messaging application, and we’ve moved it
              out of the scope of this article for the sake of brevity.
              Additionally, Firestore is still missing a couple of features in
              order to have simpler and more accurate data-like nested{" "}
              <code>array-contains</code> queries.
            </p>

            <p>
              As mentioned at the start of the article, Flutter has only
              recently matured into stable 1.0 release and is going to keep
              growing, not only when it comes to framework features and
              capabilities but also when it comes to the development community
              and third-party libraries and resources. It makes sense to invest
              your time into getting acquainted with Flutter app development
              now, as it’s clearly here to stay and{" "}
              <a
                href="https://www.toptal.com/flutter/hybrid-power-flutter-advantages"
                target="_blank"
                rel="noreferrer"
              >
                speed up your mobile development process
              </a>
              .
            </p>

            <p>
              At no additional expense,{" "}
              <a href="https://www.toptal.com/flutter">Flutter developers</a>{" "}
              will also be ready to target Google’s emerging OS–Fuchsia.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
