import WelcomeBody from "./WelcomeBody";
import WelcomeSponsors from "./WelcomeSponsors";
import WelcomeText from "./WelcomeText";

export default function Welcome() {
    return (
        <>
            <WelcomeText/>
            <WelcomeBody/>
            <WelcomeSponsors/>
        </>
    );
}