type FooterColumnProps ={
    title:string;
    children:React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
        <h4 className="bold-18 whitespace-nowrap">{title}</h4>
        {children}
    </div>
  )
};

export default FooterColumn
