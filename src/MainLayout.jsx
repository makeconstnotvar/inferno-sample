const MainLayout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  )
}
export {MainLayout}