import { Typography } from "@material-ui/core";
import ContentBackground from "../../Basic/contentBackground";
import ContentWrapper from "../../Basic/contentWrapper";

export default function Website_Design_Nov_18_2023(props) {
    const { title } = props
    return <ContentBackground>
        <ContentWrapper opacity={0.9}>
            <Typography variant="h1">{title}</Typography><br/>
            There's some pretty intriguing stuff going on here. Does it surprise you to hear
            that this entire site's routes and its assets are generated on the foundation of <b>one JavaScript Object?</b>{" "}
            And if anything goes off that foundation, we throw an error? Also, how lovely must it be to manage all of
            your client-side routing with two React components that dynamically decide which routes to generate based on 
            where you are!
            <br/><br/>
            <div style={{maxWidth: "500px"}}dangerouslySetInnerHTML={{__html: '<iframe src="https://gifer.com/embed/2IB" width=100% height=252.218 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com"></a></p>'}}></div>
            <Typography variant="h2">But... </Typography>
            I'm too fatigued writing about my personal projects to tell you about this...
            Hopefully I'll be able to populate this page and tell you soon...
            <br/><br/>
            <b>With Love,</b><br/>
            <div dangerouslySetInnerHTML={{__html: '<iframe src="https://gifer.com/embed/67Pg" width=100 height=100 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com"></a></p>'}}></div>
            <br/>
            Me :)
            
        </ContentWrapper>
    </ContentBackground>
}