import React, { useState, useEffect, } from "react";

export default function TableauJobDashboard(){
    const [TableauJobDash, LoadTableauJobDash] = useState("<div>hello!</div>")
    useEffect(() => {
        const wrapper = document.createElement('div');
        fetch("http://localhost:3000/tableau_dashboards/tableau_job_dashboard.html")
        .then(resp => resp.text())
        .then(text => {
            // console.log(text)
            wrapper.innerHTML = text;
            let script = wrapper.getElementsByTagName("script")[0]
            // console.log(script)
            // let scriptElem =;
            // console.log(script.innerHTML)
            LoadTableauJobDash(text)
            document.body.appendChild(script)
            eval(script.innerHTML)
            return () => {
                document.body.removeChild(script);
            }
        })
        .catch(e => console.log(e))
    }, [])
    return (<div style={{width: "100%"}}dangerouslySetInnerHTML={{__html: TableauJobDash}}></div>);
}

export const CustomTableauRenderer = ({
    mainState: { currentDocument },
  }) => {
    const [TableauJobDash, LoadTableauJobDash] = useState("<div>hello!</div>")
    useEffect(() => {
        const wrapper = document.createElement('div');
        fetch(currentDocument.uri)
        .then(resp => resp.text())
        .then(text => {
                // console.log(text)
            wrapper.innerHTML = text;
            // let script = wrapper.getElementsByTagName("script")[0]
            // // let scriptElem =;
            // // console.log(script.innerHTML)
            
            // if (script){
            //     wrapper.removeChild(script)
            //     document.body.appendChild(script)
            // }
            LoadTableauJobDash(text)
            })
        .catch(e => console.log(e))
    }, [])

    if (!currentDocument) return null;
    

    console.log("Current Document:")
    console.log(currentDocument)
    return <div style={{width: "100%"}} dangerouslySetInnerHTML={{__html: TableauJobDash}}></div>
}

CustomTableauRenderer.fileTypes = ["text/html"];
CustomTableauRenderer.weight = 1;
CustomTableauRenderer.fileLoader = ({
    documentURI,
    signal,
    fileLoaderComplete
}) => {
    const wrapper = document.createElement('div');
    fetch(documentURI)
    .then(resp => resp.text())
    .then(text => {
        console.log(text)
        wrapper.innerHTML = text;
        let script = wrapper.getElementsByTagName("script")[0]  
        // let scriptElem =;
        // console.log(script.innerHTML)
        document.body.appendChild(script)
        fileLoaderComplete()
    })
    .catch(e => console.log(e))

};

