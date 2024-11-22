import loadingimg from './assets/img/ComingSoon.jpeg'
import  FooTer from "./Footer"
function ComingSoon() {


    return (
        <>
         <div className='h-screen flex items-center'>
            <div className="flex justify-center items-center flex-wrap mx-10 md:mx-40">
                <img className="rounded" width="150" height="150" src={loadingimg} />
                <div className='px-2'>
                    <h1 className="text-white text-5xl text-center">coming soon</h1>
                    <p className='text-white text-center'>New Update coming soon Nisi veniam cillum officia Lorem enim. Dolore voluptate fugiat magna elit incididunt pariatur duis minim tempor amet eiusmod. Et tempor non elit incididunt deserunt in proident.</p>
                </div>
            </div>
        </div>

        <FooTer/>
        </>
       

    );
}
export default ComingSoon