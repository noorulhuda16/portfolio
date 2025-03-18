import Link from "next/link"

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer

