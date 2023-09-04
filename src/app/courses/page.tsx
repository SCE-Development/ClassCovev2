import Link from 'next/link'
import './page.css'
export default function CourseSelection() {
  return (
    <>
      <h1>Course selection</h1>
      <div id="dashboard-content">
            <link
                href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
                rel="stylesheet"
                type="text/css"
            ></link>
            <div className="dashboard-section">
                <div id="dashboard-header">
                    <h1>Ready to start planning? </h1>
                </div>
                <div className="dashboard-container">
                    <div className="school">
                        <h2>Select a school</h2>
                        <select className="dropdown">
                            <option>Select a School</option>
                            <option>SJSU</option>
                        </select>
                    </div>

                    <div>
                        <Link href="/professors">
                        Search Professors
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}