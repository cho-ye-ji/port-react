// components/layouts/Wrapper.jsx
const Wrapper = ({ children }) => (
    <div className="wrapper">
      <div className="page">
        <div className="page-body">
          <div className="container">
            <div className="container-inner">
              <div className="contents">
                <section className="section">{children}</section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Wrapper;