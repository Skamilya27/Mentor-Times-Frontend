import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4 mt-0">
        <section className="post-detail">
          <div className="post-detail__container">
            <div className="post-detail__header">
              <h1>This is post title</h1>

              {/* TODO: add category tag and link to the filtered page */}
              {/* <Link to={`/`} className="btn category">
                education
              </Link> */}
            </div>

            <div className="">
              <img
                src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="aspect-[10/4]  w-full rounded-md object-cover mt-5 mb-7 "
                alt=""
              />
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              nostrum, non expedita iste error ut dolores porro in minus
              provident possimus voluptatem. At, ratione! Repudiandae
              repellendus odit molestias, suscipit similique fugiat. Iste dolore
              necessitatibus esse, aliquid obcaecati assumenda veniam at.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
              repellendus. Officia amet exercitationem, impedit reiciendis
              veritatis, nisi minus commodi temporibus necessitatibus ab ipsum
              ratione quidem? Voluptate quis hic porro sit maxime, ut ipsa,
              sequi optio amet iste quia, vero eveniet est minus tempora quod
              ratione perspiciatis. Earum ab culpa vitae!
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              animi! Dolore vero voluptatum unde ipsum magnam adipisci.
              Cupiditate laborum optio sequi voluptatum praesentium! Explicabo
              aut cum sit, ullam quisquam laboriosam.
            </p>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus excepturi deserunt illo dolorum vero nesciunt similique
              possimus corporis esse ut rerum reiciendis, est quisquam commodi,
              doloribus, enim maiores perspiciatis totam dolore. Ducimus,
              architecto neque. Quas error adipisci deserunt officia nulla
              accusantium ad dicta sint obcaecati repellat debitis odio harum
              ipsa, nemo maiores nobis commodi sequi.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio natus ipsum facilis non illum deserunt dolorem minima
              voluptatibus asperiores qui quia nobis aspernatur nulla numquam id
              pariatur modi, quisquam repudiandae sapiente voluptas deleniti
              corporis eius. Voluptas at cupiditate unde accusamus dolores, quam
              distinctio hic optio ipsum perferendis dolorum odio sed culpa odit
              repellendus soluta tempora deserunt expedita rerum animi non.
              Dolores eius, quisquam maiores nobis delectus reprehenderit vero
              aliquid, maxime dolorem facilis, pariatur libero! Praesentium
              eligendi optio hic quas quae nobis nulla inventore quam vero?
              Dolorum delectus eius repudiandae!
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              tenetur maiores odit sequi deleniti hic dolores, iste voluptatum
              est ut dolor velit id non suscipit eligendi, obcaecati dignissimos
              eos. Minima enim porro, et culpa, nisi dicta perferendis
              dignissimos hic laboriosam maiores expedita repellat? Aut possimus
              nemo perspiciatis porro iure voluptatibus earum facilis sit rerum
              quia at adipisci vel, repellendus, omnis cupiditate ducimus
              accusantium ab aperiam dolorem temporibus quam iste vero. Quia
              possimus vitae est officiis corporis nihil asperiores omnis, ipsum
              porro reiciendis nostrum impedit qui. Deleniti suscipit officia
              reiciendis sunt at esse molestias veniam dolor? Error, autem fuga.
              Ipsum ipsa, aliquid voluptatum blanditiis rerum delectus facilis,
              maiores aut dolore similique magni. Quo ad modi vitae cupiditate
              veniam quidem reprehenderit alias recusandae. Similique nam autem
              quo incidunt consequatur, debitis porro ullam quod, vel possimus
              molestiae? Libero quasi consequuntur magnam, sunt iste nulla
              commodi corrupti error excepturi velit deleniti quas ratione
              cumque.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;
