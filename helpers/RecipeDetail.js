import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipe, goBack }) => {
  return (
    <div>
      <h1>Grilled Octopus</h1>
      <p>Tender, lightly seasoned and charred octopus that tastes amazing!</p>
      <p>Ingredients: </p>
      <ul><li>2 fresh octopus</li>
           <li>olive oil</li>
           <li>2 garlic cloves — , roughly chopped</li>
             <li>Juice from 1 lemon</li>
             <li>salt and pepper to taste</li>
              <li>1/2 tsp dried oregano</li> 
              <li>2 tsp chopped fresh parsley</li>  
              </ul>
        
      <p>Steps : </p>
      <ol>
           <li>Place octopus in a pot and cover with enough water. </li>
           <li>Bring to a boil.</li>
      <li>Boil for 40 minutes.</li>
       <li>Remove octopus from hot water, rinse and place in a bowl. Drizzle with olive oil and add chopped garlic. Let is cool and rest at room temperature, for 30 minutes to 1 hour.</li>
     <li>Preheat a gas grill to medium-high heat.</li>
    <li>Slice octopus tentacles. Grill for 3-4 minutes per side, until charred.</li>
     <li>Remove from heat and place in a bowl.</li>
      <li>Drizzle with olive oil and add lemon juice. Season with salt and pepper. Sprinkle some oregano  and parsley on top. You can also add some chopped garlic.</li>
     <li>Serve.</li>
</ol>
  
<h1>Creamy Chicken</h1>
      <p>Succulent chicken bathed in a velvety cream sauce, perfectly balanced with the zing of lemon and capers.</p>
      <p>Ingredients: </p>
     <ul>
        <li>2 large boneless skinless chicken breasts</li>
           <li>Salt & pepper to taste</li>
           <li>2 tablespoons butter divided</li>
             <li>1 whole head garlic cloves peeled</li>
             <li>1/2 cup chicken broth or stock</li>
              <li>1/2 teaspoon lemon juice</li> 
              <li>1/4 teaspoon garlic powder</li>
              <li> cup heavy/whipping cream</li>
         </ul>

        <p>Steps : </p>
    <ol>
      <li>Cut the chicken in half lengthwise so you have 4 smaller cutlets. Generously season them with salt & pepper and coat them in the flour. </li>
       <li>Add the olive oil and 1 tbsp of the butter to a skillet over medium-high heat. Once the pan is hot, sauté the chicken for 4-5 minutes/side or until it’s nice and golden. Take the chicken out of the pan and set it aside.</li>
      <li>Reduce the heat to medium , and add the rest of the butter to the pan. Let it melt and then add the garlic cloves. Cook them for 3-4 minutes, stirring often, until they’re lightly browned on the outside. </li>
       <li>Add the chicken broth, lemon juice, and garlic powder to the pan. Let it bubble for around 4 minutes or until the liquid is noticeably reduced. </li>
       <li>Stir in the cream and add the chicken back into the pan. Let it cook for another 5 minutes or so, until the sauce is reduced and the chicken is cooked through. Serve with freshly chopped parsley if you wish.</li>
</ol>

<h1>Pork Trotters</h1>
      <p>A culinary masterpiece featuring succulent, slow-cooked trotters bathed in a symphony of aromatic spices

</p>
      <p>Ingredients: </p>
      <ul> 
             <li>1 kg pork trotters</li>
               <li>2 T oil</li>
             <li>1 onion, chopped</li>
             <li>1 t paprika</li> 
             <li>1 t curry powder</li>
             <li>3 cups water</li> 
              <li> 2 cups beef stock</li> 
             <li></li>
      </ul>

      <p>Steps : </p>
      <ol>

      <li>Rinse the trotters thoroughly under clean, running water. Heat oil in a large saucepan and fry onions and spices.</li>

   <li> Add the trotters and fry for 10 minutes. Add the water, beef stock and tomatoes and season.</li>

<li>Cover and cook for 1–2 hours over a medium heat on the stove, or in the oven preheated to 200°C, until tender and falling off the bone, topping up the water when necessary.</li>
     </ol> 

     <h1>Hamburger</h1>
      <p>A mouthwatering fusion of succulent ground beef infused with aromatic Italian herbs and spices.

</p>
      <p>Ingredients: </p>
      <ul> 
             <li>1 kg pork trotters</li>
               <li>2 T oil</li>
             <li>1 onion, chopped</li>
             <li>1 t paprika</li> 
             <li>1 t curry powder</li>
             <li>3 cups water</li> 
              <li> 2 cups beef stock</li> 
              <li>650 g beef mince</li>
             <li>1/2 onion, finely chopped</li>
            <li>2 garlic cloves, finely chopped</li>
            <li>4 T parsley, roughly chopped</li>
             <li>10ml Worcester sauce</li>
            <li>3 bread slices, crusts removed</li>
              <li>190 ml milk</li>
          <li>Sea salt and freshly ground black pepper</li>
            <li>2  sunflower oil</li>
             <li></li>
      </ul>
      <p>Steps : </p>
      <ol>

       <li>Preheat the oven to 180°C.</li> 
        <li>Combine the mince, onion, garlic, parsley and Worcester sauce in a mixing bowl.</li>
         <li>Place the bread in another bowl and pour over the milk. Allow the bread to soak up the milk, then gently squeeze out any excess and add the soaked bread to the mince. Season and mix the ingredients together.</li>
         <li>Heat a griddle pan over a high heat. Mould the mince mixture into 6 equal-sized patties, brush with sunflower oil and cook for 1 minute, then turn over and cook the other side.</li>
        <li>Finish the patties in the oven for 3 minutes, taking care not to overcook them.</li>
    </ol>



     <h1>Chocolate Cake</h1>
      <p>Generously sandwiched between luscious chocolate ganache, creating a symphony of intense cocoa flavors.</p>
      <p>Ingredients: </p>
      <ul>
             <li>1 3/4 cups all purpose flour</li> 
            <li>3/4 cup unsweetened cocoa powder,</li>
           <li>1 1/2 teaspoon baking powder</li>
           <li>1 1/2 teaspoon baking soda</li>
           <li>1 teaspoon salt</li>
           <li>2 cups white granulated sugar</li>
           <li>2 large eggs</li>
            <li>1 cup milk</li>
           <li>1/2 cup vegetable oil</li>
           <li>2 teaspoons pure vanilla extract</li>
             <li>1 cup boiling water </li>
              </ul>

              <p>Steps : </p>
              <ol>
     <li>Preheat oven to 180°C</li>
       <li>Sift together flour, cocoa, baking powder, baking soda and salt into a large bowl. Whisk in sugar, then add eggs, milk, oil and vanilla. Whisk well to combine until lump free, about 30 seconds.</li>
      <li>Reduce the heat to medium , and add the rest of the butter to the pan. Let it melt and then add the garlic cloves. Cook them for 3-4 minutes, stirring often, until they’re lightly browned on the outside. </li>
       <li>Pour boiling water into batter, mixing well. Cake batter is thin in consistency.</li>
       <li>Pour batter into cake pans and bake for 30-35 minutes or until a wooden skewer inserted into the centre comes out clean.</li>
       <li>Let cool for 10 minutes, then turn out onto wire racks to cool completely before frosting.</li>
       <li></li>
       </ol>

       <h1>Tin Roof IceCream</h1>
      <p>  A timeless treat that marries velvety vanilla ice cream with swirls of fudgy chocolate and roasted peanuts.</p>
      <p>Ingredients: </p>
      <ul>
           <p>For the ice cream:</p>
            <li>1 x 385 g can condensed milk</li>
              <li>2½ t vanilla extract</li>
              <li>¼ salt</li>
                <li>2 cups whipping cream</li>
               <p>For the chocolate-fudge sauce:</p> 
                <li>1 x 385 g can condensed milk</li>
              <li>1 x 380 g can Ideal evaporated milk</li>
                <li>160 g milk chocolate , broken into small pieces</li>
              <li>2 Teaspoon sugar</li> 
            <li>300 g roasted and salted cashews</li>
              </ul>
              <p>Steps : </p>
              <ol>
         <li>To make the ice cream, mix the condensed milk, vanilla and salt in a bowl. Whip the cream until stiff peaks form</li>
         <li> Add a few spoons of whipped cream to the condensed milk and fold in gently to lighten the mixture. Pour the lightened condensed milk back into the remaining whipped cream and gently fold in.</li>
       <li> To make the chocolate-fudge sauce, place all the ingredients into a saucepan over a low heat, stirring continuously, until all the chocolate bits have melted.</li>
       <li>Once the chocolate has melted, allow the mixture to boil gently, stirring continuously. Once small bubbles start forming, take it off the heat and set aside to cool. This makes about 3 cups of chocolate sauce. It can be made ahead of time and stored in the fridge. It will thicken, but a few seconds in the microwave will soften it.</li>
       <li>. Once the ice cream is semi-set (after the two hours in the freezer) swirl in about 2 cups of the chocolate-fudge sauce and the cashews. Be careful not to overmix. You definitely don’t want chocolate ice cream, you want vanilla ice cream with thick “rivers” of chocolate-fudge sauce and cashews running through it. Return to the freezer for another 8 hours.</li>
       <li>Serve with some of the remaining chocolate-fudge sauce poured on top, or go wild and make suburban sundaes. Scoop the ice cream into a sundae glass, pour over the remaining chocolate-fudge sauce and top with cashews. </li>
       
       </ol>

              
              
     <h1>Lasagna</h1>
      <p>Perfect lasagne</p>
      <p>Ingredients: </p>
      <ul>
             
             <li> 500 ml boiling water </li>
            <li>400 ml water</li>
            <li>1 onion, chopped</li>
            <li>125 ml cheddar cheese, grated</li>
             <li>1 generous handful baby spinach leaves</li>
          <li>410 g tin tomatoes, chopped</li>
            <li>15 ml oil</li>
         <li>48 g (1 sachet) Knorr spaghetti Bolognese (Bolognaise) dry cook-in-sauce</li>
          <li>38 g (x 3 sachets) Knorr creamy cheese pasta sauce</li>
          <li>500 g beef mince</li>
            <li>200 g pre instant lasagne sheets, cooked</li>
              </ul>

              <p>Steps : </p>
              <ol>
<li>Preheat the oven to 200°C. Finely chop the onions, carrots and garlic in a food processor, then soften in the olive oil over a low heat for 5 minutes without allowing them to colour.</li>

     <li>Increase the heat to medium and add the mince. Brown, then add the thyme and red wine and cook for 1–2 minutes.</li>
    <li>Stir through the tomato purée, canned tomatoes, beef stock, tomato paste and season to taste. Simmer for 45 minutes to 1 hour, then stir through the balsamic vinegar.</li>
    <li>To make the white sauce, melt the butter in a pan over a low heat, then whisk in the flour and cook for 1 minute. Slowly add the milk, a little at a time, and whisk into the flour mixture until smooth. Simmer for a further minute, stirring continually, and season to taste.</li>
    <li>Place a layer of mince in the bottom of an ovenproof dish, then top with a layer of pasta and white sauce. Repeat until the dish is full, finishing with a layer of white sauce. Sprinkle over the Parmigiano Reggiano, paprika and breadcrumbs. Bake for 25–30 minutes, or until golden.</li>
    </ol>


    <h1>Greek Salad</h1>
      <p>Greek salad</p> 
      <p>Ingredients: </p>
      <ul>
   <li> ¼ cup extra-virgin olive oil</li>
    <li>3 tablespoons red wine vinegar</li>
     <li>1 garlic clove, minced</li>
      <li>½ teaspoon dried oregano, more for sprinkling</li>
          <li>¼ teaspoon Dijon mustard</li>
<li>¼ teaspoon sea salt</li>
        <li>Freshly ground black pepper</li>
<li>1 English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick</li>
<li>1 green bell pepper, chopped into 1-inch pieces</li>
<li>2 cups halved cherry tomatoes</li>
  </ul>


<p>Steps : </p>
              <ol>

     <li>Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.</li>
    <li>On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve.
</li>
    </ol>

    
    <h1>Strawberrry cheesecake</h1>
      <p>The Original Topped with Glazed Fresh Strawberries. Our Most Popular Flavor for over 40 Years!</p>
      <p>Ingredients: </p>
      <ul>
            

<li>1x 200g packet of Tennis Biscuits</li>
<li>200g butter</li>
<li>250g whipped cream</li>
<li>1kg smooth cottage cheese</li>
<li>2x tins of condensed milk (794g)</li>
<li>1x cup lemon Juice</li>
<li>30g gelatine</li>
<li>50g almond flakes (for garnish)</li>
<li>Glacé Strawberrry (for garnish)</li>
              </ul>

              <p>Steps : </p>
              <ol>

              <li>Crush the Tennis Biscuits finely using a rolling pin</li>
                 <li>Melt the butter in the microwave</li>
<li>Mix crushed biscuits and melted butter together and press into greased or sprayed 28cm pan</li>
<li>Mix cottage cheese and condensed milk together with a mixer until smooth</li>
<li>Add whipped cream into the mixture and continue mixing</li>
<li>Melt the gelatine in lemon juice and microwave on high for 1 minute. Leave to cool</li>
<li>Add the lemon juice mixture and mix until smooth</li>
<li>Pour into the pan over the biscuit base</li>
<li>Freeze the cake for a couple of hours and then move to the fridge once set</li>
<li>Cover the cake with more whipped cream and garnish with almond flakes and cherries</li>
    </ol>


    </div>
    

    



    
  );
  };


export default RecipeDetail;
