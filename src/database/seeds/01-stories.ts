import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("articles").del();

    // Inserts seed entries
    await knex("articles").insert([
        { id: 1, title: "Trouble in Paradise", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur rerum officia, quia aspernatur, aliquam possimus voluptatibus, quis asperiores laboriosam voluptate. Minima repudiandae dolorem, incidunt repellat molestiae quasi dicta eum corporis asperiores officia amet sapiente, quam ab saepe laboriosam at quibusdam sed officiis similique perspiciatis numquam? Eaque quod magni beatae.", author_id: 1, image_url: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" },
        { id: 2, title: "The rise and fall of Idi Amin", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil laudantium magnam ducimus laborum aliquam, quam distinctio nam dolorem labore nemo assumenda accusantium nesciunt eius ipsa optio minima provident inventore iusto ab necessitatibus sunt qui cupiditate cumque. Officiis sunt facilis accusamus nostrum voluptas nobis dolorum rerum. Laboriosam perspiciatis corporis ut!", author_id: 1, image_url: "https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" },
        { id: 3, title: "A slimy calamity is creeping across the sea", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia necessitatibus, quae repudiandae dolorem vero iure natus possimus illum maxime rerum. Doloremque delectus nobis debitis? Asperiores sapiente atque maxime dolorem distinctio repellat fugiat sunt blanditiis! Repellat quis quos culpa velit perferendis id nihil, vel fuga sint. Nemo quo similique fuga corrupti!", author_id: 2, image_url: "https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" }
    ]);
};
