import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

function Resume(){
    function resumeDownload(){
        const link = document.createElement('a');
        link.href = 'Samuel Bricker Resume.pdf';
        link.download = 'Samuel Bricker Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div>
            <Button onClick={resumeDownload}>Dowload Resume</Button>
        </div>
    )
}

export default Resume;