// ── MENU DATA (Lucky Key & Fuji Ya — Official Menu)
const menuData = {
  lunch: [
    { e:"", n:"Shrimp Egg Roll (2)", d:"", p:6.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Vegetable Spring Roll (2)", d:"", p:4.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Egg Roll (2)", d:"Deep fried, beef & vegetables", p:5.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Steamed or Fried Chinese Bread", d:"", p:5.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Pot Stickers", d:"Pork and vegetables · Steamed, fried, or pan-fried", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Vegetable Pot Stickers", d:"Steamed, fried, or pan-fried", p:7.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Crab Rangoon", d:"", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Shrimp Tempura", d:"Deep fried", p:9.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Fried Chicken Wings", d:"", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Sesame Chicken Wings", d:"", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Lemon Pepper Wings", d:"", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Hot Braised Chicken Wings", d:"", p:8.95, img:null, subcat:"cn_appetizer" },
    { e:"", n:"Hot & Sour Soup (for 1)", d:"", p:4.95, img:null, subcat:"cn_soup" },
    { e:"", n:"Egg Drop Soup (for 1)", d:"Chicken broth", p:4.95, img:null, subcat:"cn_soup" },
    { e:"", n:"Wonton Soup (for 1)", d:"Chicken broth", p:5.5, img:null, subcat:"cn_soup" },
    { e:"", n:"Pad Thai Chicken", d:"", p:14.95, img:null, subcat:"cn_padthai" },
    { e:"", n:"Pad Thai Beef", d:"", p:14.95, img:null, subcat:"cn_padthai" },
    { e:"", n:"Pad Thai Pork", d:"", p:14.95, img:null, subcat:"cn_padthai" },
    { e:"", n:"Pad Thai Shrimp", d:"", p:15.95, img:null, subcat:"cn_padthai" },
    { e:"", n:"Fried Rice — Vegetable", d:"", p:11.95, img:null, subcat:"cn_friedrice" },
    { e:"", n:"Fried Rice — Chicken", d:"", p:11.95, img:null, subcat:"cn_friedrice" },
    { e:"", n:"Fried Rice — Pork", d:"", p:11.95, img:null, subcat:"cn_friedrice" },
    { e:"", n:"Fried Rice — Beef", d:"", p:11.95, img:null, subcat:"cn_friedrice" },
    { e:"", n:"Fried Rice — Shrimp", d:"", p:12.95, img:null, subcat:"cn_friedrice" },
    { e:"", n:"Lo Mein — Vegetable", d:"", p:11.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Lo Mein — Chicken", d:"", p:12.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Lo Mein — Roast Pork", d:"", p:12.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Lo Mein — Beef", d:"", p:12.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Lo Mein — Shrimp", d:"", p:12.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Lo Mein — Hong Kong", d:"", p:13.95, img:null, subcat:"cn_lomein" },
    { e:"", n:"Sweet and Sour Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Hot Braised Chicken Wing", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Sesame Chicken Wing", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Sauteed Shredded Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Mongolian Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Snow White Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Szechuan Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Lemon Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Hunan Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Chicken with Vegetables", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Kung Pao Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Fragrant Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Sesame Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"General Tso's Chicken", d:"", p:11.95, img:null, subcat:"cn_chicken" },
    { e:"", n:"Sweet & Sour Pork", d:"", p:11.95, img:null, subcat:"cn_pork" },
    { e:"", n:"Roast Pork with Veggies", d:"", p:11.95, img:null, subcat:"cn_pork" },
    { e:"", n:"Mongolian Pork", d:"", p:11.95, img:null, subcat:"cn_pork" },
    { e:"", n:"Fragrant Pork", d:"", p:11.95, img:null, subcat:"cn_pork" },
    { e:"", n:"Hot Braised Pork", d:"", p:11.95, img:null, subcat:"cn_pork" },
    { e:"", n:"Mongolian Beef", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Pepper Steak", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Beef with Vegetables", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Hunan Beef", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Broccoli Beef", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Beef with Scallops", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Szechuan Beef", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Sauteed Shredded Beef", d:"", p:12.95, img:null, subcat:"cn_beef" },
    { e:"", n:"Sweet and Sour Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Shrimp with Lobster Sauce", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Shrimp with Chinese Vegetables", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Cashew Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Hunan Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Fragrant Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Princess Shrimp", d:"Deep fried", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Dragon and Phoenix", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Happy Family", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Sesame Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Broccoli Shrimp", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Shrimp & Scallop with Vegetables", d:"", p:13.95, img:null, subcat:"cn_seafood" },
    { e:"", n:"Vegetable Deluxe", d:"", p:11.95, img:null, subcat:"cn_vegetable" },
    { e:"", n:"Szechuan Vegetable", d:"", p:11.95, img:null, subcat:"cn_vegetable" },
    { e:"", n:"Japanese Spring Roll", d:"", p:6.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Vegetable Dumplings", d:"", p:6.96, img:null, subcat:"su_appetizer" },
    { e:"", n:"*Sushi Chef's Choice", d:"", p:7.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"*Sashimi Chef's Choice", d:"", p:9.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"*Maki Combo Chef's Choice", d:"", p:10.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Tempura Fried Shrimp & Vegetable", d:"", p:9.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Fried Baby Octopus", d:"", p:10.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Shrimp Cake", d:"", p:7.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Shrimp Toast", d:"", p:8.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Grilled Mussel", d:"", p:10.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Edamame", d:"", p:4.95, img:null, subcat:"su_appetizer" },
    { e:"", n:"Miso Soup", d:"", p:4.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Chicken Soup", d:"", p:3.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Ginger Salad", d:"", p:3.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Seaweed Salad", d:"", p:6.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Calamari Salad", d:"", p:8.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Cucumber and Crab Salad", d:"", p:7.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"*Tuna, Salmon & Avocado Salad", d:"", p:11.95, img:null, subcat:"su_soupsalad" },
    { e:"", n:"Plain Udon", d:"", p:10.95, img:null, subcat:"su_udonrice" },
    { e:"", n:"Tempura Udon", d:"", p:12.95, img:null, subcat:"su_udonrice" },
    { e:"", n:"Kitsune Udon", d:"", p:11.95, img:null, subcat:"su_udonrice" },
    { e:"", n:"Chicken Udon", d:"", p:12.95, img:null, subcat:"su_udonrice" },
    { e:"", n:"Japanese Fried Rice", d:"", p:7.95, img:null, subcat:"su_udonrice" },
    { e:"", n:"Express Box — Chicken Teriyaki", d:"", p:12.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Express Box — Beef Teriyaki", d:"", p:12.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Express Box — Shrimp Teriyaki", d:"", p:14.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Express Box — Salmon Teriyaki", d:"", p:14.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Express Box — California Rolls (6)", d:"", p:13.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"*Express Box — Sushi", d:"Chef's choice", p:14.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"*Express Box — California Rolls (6) & Sashimi (4)", d:"", p:14.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Express Box — Katsu", d:"Choice of chicken, beef, or tilapia", p:14.95, img:null, subcat:"su_expressbox" },
    { e:"", n:"Pad Thai", d:"Spicy & sweet stir fried rice noodle · Choice of chicken, pork, or beef", p:13.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Shrimp Pad Thai", d:"", p:14.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Thin Vietnamese Noodle Bowl", d:"Rice noodle, chicken, pork, beef, vegetable, or tofu", p:12.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Seafood Thin Vietnamese Noodle Bowl", d:"Rice noodle, seafood", p:13.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Spicy Thai Noodle Bowl", d:"Rice noodle, chicken, pork, beef, vegetable, or tofu", p:12.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Spicy Seafood Thai Noodle Bowl", d:"Rice noodle, seafood", p:13.95, img:null, subcat:"su_ricenoodle" },
    { e:"", n:"Miso Soup", d:"", p:4.95, img:null, subcat:"hb_soupsalad" },
    { e:"", n:"Chicken Soup", d:"", p:4.95, img:null, subcat:"hb_soupsalad" },
    { e:"", n:"Ginger Salad", d:"", p:3.95, img:null, subcat:"hb_soupsalad" },
    { e:"", n:"Seaweed Salad", d:"", p:6.95, img:null, subcat:"hb_soupsalad" },
    { e:"", n:"Cucumber & Crab Salad", d:"", p:7.95, img:null, subcat:"hb_soupsalad" },
    { e:"", n:"Vegetable", d:"", p:11.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"Chicken", d:"", p:13.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*New York Steak", d:"", p:14.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Korean BBQ Steak 🆕", d:"Chef's special marinade", p:15.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"Shrimp", d:"", p:14.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Salmon", d:"", p:14.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"Chicken & Shrimp", d:"", p:17.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Shrimp & Salmon", d:"", p:19.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Chicken & Steak", d:"", p:17.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Steak & Shrimp", d:"", p:18.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*Chicken & K-BBQ Steak 🆕", d:"", p:18.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"*K-BBQ Steak & Shrimp 🆕", d:"", p:19.95, img:null, subcat:"hb_hibachi" },
    { e:"", n:"Edamame", d:"", p:5.95, img:null, subcat:"hb_appetizer" },
    { e:"", n:"Gyoza (6)", d:"", p:7.95, img:null, subcat:"hb_appetizer" },
    { e:"", n:"Tempura", d:"", p:10.95, img:null, subcat:"hb_appetizer" },
    { e:"", n:"Shrimp Tempura", d:"", p:11.95, img:null, subcat:"hb_appetizer" },
    { e:"", n:"Bento — Chicken Teriyaki", d:"", p:15.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Beef Teriyaki", d:"", p:17.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Shrimp Teriyaki", d:"", p:17.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Salmon Teriyaki", d:"", p:17.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Korean BBQ Steak 🆕", d:"", p:18.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Chicken & Shrimp", d:"", p:19.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Chicken & Beef", d:"", p:19.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — Beef & Shrimp", d:"", p:20.95, img:null, subcat:"hb_bento" },
    { e:"", n:"Bento — K-BBQ Steak & Shrimp 🆕", d:"", p:21.95, img:null, subcat:"hb_bento" },
  ],

  chineseDinner: [
    { e:"", n:"Shrimp Egg Roll (2)", d:"", p:6.95, img:null, subcat:"appetizer" },
    { e:"", n:"Vegetable Spring Roll (2)", d:"", p:4.95, img:null, subcat:"appetizer" },
    { e:"", n:"Egg Roll (2)", d:"Deep fried, beef & vegetables", p:5.95, img:null, subcat:"appetizer" },
    { e:"", n:"Steamed or Fried Chinese Bread", d:"", p:5.95, img:null, subcat:"appetizer" },
    { e:"", n:"Pot Stickers", d:"Pork and vegetables · Steamed, fried, or pan-fried", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Vegetable Pot Stickers", d:"Steamed, fried, or pan-fried", p:7.95, img:null, subcat:"appetizer" },
    { e:"", n:"Crab Rangoon", d:"", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Shrimp Tempura", d:"Deep fried", p:9.95, img:null, subcat:"appetizer" },
    { e:"", n:"Fried Chicken Wings", d:"", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Sesame Chicken Wings", d:"", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Lemon Pepper Wings", d:"", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Hot Braised Chicken Wings", d:"", p:8.95, img:null, subcat:"appetizer" },
    { e:"", n:"Hot & Sour Soup (for 1)", d:"", p:4.95, img:null, subcat:"soup" },
    { e:"", n:"Egg Drop Soup (for 1)", d:"Chicken broth", p:4.95, img:null, subcat:"soup" },
    { e:"", n:"Wonton Soup (for 1)", d:"Chicken broth", p:5.5, img:null, subcat:"soup" },
    { e:"", n:"Sizzling Rice Soup (for 2)", d:"Chicken, mushroom, water chestnut, golden crispy rice, chicken broth", p:8.95, img:null, subcat:"soup" },
    { e:"", n:"Spinach Bean Curd Soup (for 2)", d:"Chicken broth", p:7.95, img:null, subcat:"soup" },
    { e:"", n:"Vegetables Soup (for 2)", d:"Choose original or spicy", p:7.95, img:null, subcat:"soup" },
    { e:"", n:"House Special Soup (for 2)", d:"Combination seafood", p:9.95, img:null, subcat:"soup" },
    { e:"", n:"Chicken Corn Soup (for 2)", d:"", p:8.95, img:null, subcat:"soup" },
    { e:"", n:"Mongolian Combo", d:"Beef, shrimp & chicken", p:17.95, img:null, subcat:"housespecials" },
    { e:"", n:"House Special Combination", d:"Fried shrimp, chicken & beef with sesame sauce", p:17.95, img:null, subcat:"housespecials" },
    { e:"", n:"Salt & Pepper Boneless Chicken", d:"Fried", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Salt & Pepper Peeled Shrimp", d:"", p:18.95, img:null, subcat:"housespecials" },
    { e:"", n:"Salt & Pepper Squid", d:"Fried", p:17.95, img:null, subcat:"housespecials" },
    { e:"", n:"Salt & Pepper Combo", d:"Shrimp, squid & scallops", p:18.95, img:null, subcat:"housespecials" },
    { e:"", n:"General Tso's Chicken", d:"Deep fried chicken with scorched red peppers, veggies, & spices", p:14.95, img:null, subcat:"housespecials" },
    { e:"", n:"Dragon and Phoenix", d:"Chicken breast blended with fresh shrimp & veggies", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Four Seasons", d:"Seafood & chicken with veggies served on hot plate", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Peking Shrimp", d:"Deep fried shrimp in savory hot sauce with garlic", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Sweet & Sour Combination", d:"Fried pork, chicken, & shrimp", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Triple Delight", d:"Shrimp, chicken, & beef sautéed with veggies", p:16.95, img:null, subcat:"housespecials" },
    { e:"", n:"Hong Kong Noodles with Soup", d:"Seafood, beef, & veggies sautéed in hot sauce, served on soup noodles", p:15.95, img:null, subcat:"housespecials" },
    { e:"", n:"Chicken and Beef with Vegetables", d:"Beef & chicken breast with veggies in chef special sauce", p:15.95, img:null, subcat:"housespecials" },
    { e:"", n:"Sweet & Sour Pork", d:"", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Mu Shu Pork", d:"", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Mongolian Pork", d:"", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Fragrant Pork", d:"Stir-fried pork and vegetables in sweet hot pepper sauce", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Hot Bean Curd with Pork", d:"", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Roast Pork with Veggies", d:"", p:14.95, img:null, subcat:"pork" },
    { e:"", n:"Mu Shu Beef", d:"Fancy eggs with beef and shiitake mushrooms with thin Chinese pancakes", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Mongolian Beef", d:"", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Pepper Steak", d:"Sautéed sliced beef with onions and green peppers", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Hunan Beef", d:"Tender beef sautéed with vegetables in a special hot sauce", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Orange Beef", d:"Deep fried beef in a savory orange sauce with orange peels", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Sesame Beef", d:"Deep fried beef with sesame seeds in special sesame sauce", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Sauteed Shredded Beef", d:"Beef in Chinese special sauce, sautéed Szechuan style", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Beef with Vegetables", d:"", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Beef with Broccoli", d:"", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Szechuan Beef", d:"Stir-fried beef and vegetables with Szechuan-style hot sauce", p:15.95, img:null, subcat:"beef" },
    { e:"", n:"Beef with Scallops", d:"Tender beef with fresh scallops and vegetables", p:17.95, img:null, subcat:"beef" },
    { e:"", n:"Chef's Chicken", d:"White meat chicken and veggies with chef's special sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Snow White Chicken", d:"Chicken breast with mushroom, bamboo shoot, snow peas, water chestnut & broccoli", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Kung Pao Chicken", d:"Diced chicken sautéed with dried chili topped with peanuts", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Sweet & Sour Chicken", d:"", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Hot Braised Chicken Wing", d:"Chicken wing fried in thin batter & braised w/ hot pepper Szechuan style", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Cashew Chicken", d:"Tender chicken, veggies, & cashew nuts", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Sesame Chicken", d:"Deep fried chicken breast with special sesame sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Szechuan Chicken", d:"Deep fried chicken breast with Szechuan style hot sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Lemon Chicken", d:"Deep fried chicken breast with lemon sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Hunan Chicken", d:"Diced chicken with veggies in special hot sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Chicken with Veggies", d:"", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Peking Chicken", d:"Deep fried chicken in savory hot sauce with garlic flavoring", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Broccoli Chicken", d:"", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Fragrant Chicken", d:"Stir fried chicken breast and veggies in sweet hot pepper sauce", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Mongolian Chicken", d:"", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Mu Shu Chicken", d:"Flavored eggs with chicken breast & mushrooms, with Chinese pancakes", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Orange Peel Chicken", d:"Deep fried chicken in savory hot orange sauce with orange peels", p:14.95, img:null, subcat:"chicken" },
    { e:"", n:"Peking Fish Fillet", d:"Fried fish fillet with peking sauce", p:19.95, img:null, subcat:"fish" },
    { e:"", n:"Chef's Fish Fillet", d:"Fried fish fillet with chef's special sauce", p:19.95, img:null, subcat:"fish" },
    { e:"", n:"Steam Fish Fillet", d:"Steamed fish fillet with ginger onion sauce", p:20.95, img:null, subcat:"fish" },
    { e:"", n:"Sesame Shrimp", d:"Deep fried shrimp sautéed with our special sesame sauce", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Mu Shu Shrimp", d:"Fancy eggs w/ shrimp & skin mushroom w/ thin Chinese pancakes", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Happy Family", d:"Mixed meat, poultry, seafood and vegetables sautéed in light sauce", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Sweet & Sour Shrimp", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Shrimp with Lobster Sauce", d:"Shrimp, egg, scallions with vegetables", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Princess Shrimp", d:"Deep fried shrimp blended with our special hot sauce", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Shrimp with Cashew Nuts", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Fragrant Shrimp", d:"Stir-fried shrimp and vegetables in sweet hot pepper sauce", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Shrimp with Vegetables", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Hunan Shrimp", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Broccoli Shrimp", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Mongolian Shrimp", d:"", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Szechuan Shrimp", d:"Stir-fried shrimp and vegetables with Szechuan-style hot sauce", p:17.95, img:null, subcat:"seafood" },
    { e:"", n:"Shrimp & Scallop with Veggies", d:"", p:19.95, img:null, subcat:"seafood" },
    { e:"", n:"Steamed Veggie Deluxe", d:"", p:12.95, img:null, subcat:"dieter" },
    { e:"", n:"Steamed Moo Goo Gai Pan", d:"", p:14.95, img:null, subcat:"dieter" },
    { e:"", n:"Steamed Shrimp with Veggies", d:"", p:17.95, img:null, subcat:"dieter" },
    { e:"", n:"Vegetable Deluxe", d:"", p:12.95, img:null, subcat:"vegetable" },
    { e:"", n:"Sauteed String Bean with Garlic Sauce", d:"", p:12.95, img:null, subcat:"vegetable" },
    { e:"", n:"Szechuan Vegetable", d:"", p:12.95, img:null, subcat:"vegetable" },
    { e:"", n:"Szechuan Bean Curd with Veggies", d:"", p:13.95, img:null, subcat:"vegetable" },
    { e:"", n:"Szechuan Eggplant", d:"", p:12.95, img:null, subcat:"vegetable" },
    { e:"", n:"Mixed Veggies with Bean Curd", d:"", p:13.95, img:null, subcat:"vegetable" },
    { e:"", n:"Broccoli", d:"", p:9.95, img:null, subcat:"vegside" },
    { e:"", n:"Bean Sprout", d:"", p:8.95, img:null, subcat:"vegside" },
    { e:"", n:"String Beans", d:"", p:9.95, img:null, subcat:"vegside" },
    { e:"", n:"Steamed or Fried Bean Curd", d:"Tofu", p:9.95, img:null, subcat:"vegside" },
    { e:"", n:"Mixed Vegetables", d:"Sautéed with garlic sauce", p:9.95, img:null, subcat:"vegside" },
    { e:"", n:"Egg Fu Yung — Vegetable", d:"", p:14.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Egg Fu Yung — Chicken", d:"", p:14.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Egg Fu Yung — Beef", d:"", p:14.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Egg Fu Yung — Roast Pork", d:"", p:14.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Egg Fu Yung — Shrimp", d:"", p:16.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Egg Fu Yung — House Special", d:"", p:16.95, img:null, subcat:"eggfuyung" },
    { e:"", n:"Fried Rice — Egg", d:"", p:10.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Vegetable", d:"", p:12.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Chicken", d:"", p:12.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Pork", d:"", p:12.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Beef", d:"", p:12.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Shrimp", d:"", p:13.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Shrimp & Chicken", d:"", p:13.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — House Special", d:"", p:13.95, img:null, subcat:"friedrice" },
    { e:"", n:"Fried Rice — Spicy House Special", d:"", p:13.95, img:null, subcat:"friedrice" },
    { e:"", n:"Lo Mein / Chow Huo Fun — Vegetable", d:"", p:13.95, img:null, subcat:"lomein" },
    { e:"", n:"Lo Mein / Chow Huo Fun — Chicken", d:"", p:14.95, img:null, subcat:"lomein" },
    { e:"", n:"Lo Mein / Chow Huo Fun — Beef", d:"", p:14.95, img:null, subcat:"lomein" },
    { e:"", n:"Lo Mein / Chow Huo Fun — Roast Pork", d:"", p:14.95, img:null, subcat:"lomein" },
    { e:"", n:"Lo Mein / Chow Huo Fun — Shrimp", d:"", p:15.95, img:null, subcat:"lomein" },
    { e:"", n:"Lo Mein / Chow Huo Fun — House Special", d:"", p:15.95, img:null, subcat:"lomein" },
    { e:"", n:"Mai Fun — Singapore", d:"Roast pork & shrimp with curry sauce", p:14.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — House Special", d:"Chicken breast, roast pork, & shrimp with brown sauce", p:14.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — Shrimp", d:"", p:14.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — Chicken", d:"", p:13.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — Roast Pork", d:"", p:13.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — Beef", d:"", p:13.95, img:null, subcat:"maifun" },
    { e:"", n:"Mai Fun — Vegetable", d:"", p:12.95, img:null, subcat:"maifun" },
    { e:"", n:"Pad Thai Chicken", d:"", p:14.95, img:null, subcat:"padthai" },
    { e:"", n:"Pad Thai Beef", d:"", p:14.95, img:null, subcat:"padthai" },
    { e:"", n:"Pad Thai Pork", d:"", p:14.95, img:null, subcat:"padthai" },
    { e:"", n:"Pad Thai Shrimp", d:"", p:15.95, img:null, subcat:"padthai" },
    { e:"", n:"Dinner Combo For 2", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef", p:40.95, img:null, subcat:"combo" },
    { e:"", n:"Dinner Combo For 3", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef, Snow White Chicken", p:60.95, img:null, subcat:"combo" },
    { e:"", n:"Dinner Combo For 4", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef, Snow White Chicken, Shrimp with Veggies", p:83.95, img:null, subcat:"combo" },
    { e:"", n:"Dinner Combo For 5", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef, Snow White Chicken, Shrimp with Veggies, Hunan Shrimp", p:106.95, img:null, subcat:"combo" },
    { e:"", n:"Dinner Combo For 6", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef, Snow White Chicken, Shrimp with Veggies, Hunan Shrimp, Vegetable Deluxe", p:124.95, img:null, subcat:"combo" },
    { e:"", n:"Dinner Combo For 8", d:"Egg rolls, Sizzling rice soup, Sweet & sour chicken, Mongolian Beef, Snow White Chicken, Shrimp with Veggies, Hunan Shrimp, Vegetable Deluxe, Pork with Vegetables", p:151.95, img:null, subcat:"combo" },
  ],

  hibachiDinner: [
    { e:"", n:"Miso Soup", d:"", p:4.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Chicken Soup", d:"", p:4.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Ginger Salad", d:"", p:3.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Seaweed Salad", d:"", p:6.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Cucumber & Crab Salad", d:"", p:7.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Kids Hibachi — Chicken", d:"", p:14.95, img:null, subcat:"kids" },
    { e:"", n:"Kids Hibachi — Shrimp", d:"", p:16.95, img:null, subcat:"kids" },
    { e:"", n:"*Kids Hibachi — Steak", d:"", p:16.95, img:null, subcat:"kids" },
    { e:"", n:"*Kids Hibachi — Salmon", d:"", p:16.95, img:null, subcat:"kids" },
    { e:"", n:"Kids Hibachi — K-BBQ Steak 🆕", d:"Mild sweet sauce", p:17.95, img:null, subcat:"kids" },
    { e:"", n:"Kids Hibachi — Chicken & Shrimp", d:"", p:18.95, img:null, subcat:"kids" },
    { e:"", n:"*Kids Hibachi — Steak & Shrimp", d:"", p:18.95, img:null, subcat:"kids" },
    { e:"", n:"*Kids Hibachi — Chicken & Steak", d:"", p:18.95, img:null, subcat:"kids" },
    { e:"", n:"Edamame", d:"", p:5.95, img:null, subcat:"appetizer" },
    { e:"", n:"Gyoza (6)", d:"", p:7.95, img:null, subcat:"appetizer" },
    { e:"", n:"Tempura", d:"", p:10.95, img:null, subcat:"appetizer" },
    { e:"", n:"Shrimp Tempura", d:"", p:11.95, img:null, subcat:"appetizer" },
    { e:"", n:"Vegetable", d:"", p:17.95, img:null, subcat:"dinner" },
    { e:"", n:"Chicken", d:"", p:19.95, img:null, subcat:"dinner" },
    { e:"", n:"*New York Steak", d:"", p:23.95, img:null, subcat:"dinner" },
    { e:"", n:"*Korean BBQ Steak 🆕", d:"Chef's special marinade", p:25.95, img:null, subcat:"dinner" },
    { e:"", n:"Shrimp", d:"", p:23.95, img:null, subcat:"dinner" },
    { e:"", n:"*Salmon", d:"", p:23.95, img:null, subcat:"dinner" },
    { e:"", n:"*Filet Mignon", d:"", p:27.95, img:null, subcat:"dinner" },
    { e:"", n:"Lobster", d:"", p:45.95, img:null, subcat:"dinner" },
    { e:"", n:"Add On — Vegetable", d:"", p:7.95, img:null, subcat:"addon" },
    { e:"", n:"Add On — Chicken", d:"", p:10.95, img:null, subcat:"addon" },
    { e:"", n:"*Add On — Salmon", d:"", p:12.95, img:null, subcat:"addon" },
    { e:"", n:"Add On — Scallop", d:"", p:12.95, img:null, subcat:"addon" },
    { e:"", n:"Add On — Shrimp", d:"", p:12.95, img:null, subcat:"addon" },
    { e:"", n:"*Add On — New York Steak", d:"", p:11.95, img:null, subcat:"addon" },
    { e:"", n:"*Add On — Korean BBQ Steak 🆕", d:"", p:12.95, img:null, subcat:"addon" },
    { e:"", n:"*Add On — Filet Mignon", d:"", p:14.95, img:null, subcat:"addon" },
    { e:"", n:"Add On — Lobster", d:"", p:24.95, img:null, subcat:"addon" },
    { e:"", n:"*Combo Dinner — Chicken & Steak", d:"", p:24.95, img:null, subcat:"combo" },
    { e:"", n:"*Combo Dinner — Steak & Shrimp", d:"", p:24.95, img:null, subcat:"combo" },
    { e:"", n:"Combo Dinner — Shrimp & Chicken", d:"", p:24.95, img:null, subcat:"combo" },
    { e:"", n:"*Combo Dinner — Chicken & Filet Mignon", d:"", p:27.95, img:null, subcat:"combo" },
    { e:"", n:"*Combo Dinner — Filet Mignon & Scallop", d:"", p:28.95, img:null, subcat:"combo" },
    { e:"", n:"*Combo Dinner — Filet Mignon & Shrimp", d:"", p:28.95, img:null, subcat:"combo" },
    { e:"", n:"*Combo Dinner — Fuji Ya Special", d:"Chicken, steak, & shrimp", p:30.95, img:null, subcat:"combo" },
    { e:"", n:"*Chef Special — Filet Mignon, Chicken, & Shrimp", d:"", p:33.95, img:null, subcat:"chefspecial" },
    { e:"", n:"*Chef Special — Filet Mignon, Scallop, Chicken, & Shrimp", d:"", p:39.95, img:null, subcat:"chefspecial" },
    { e:"", n:"Chef Special — Lobster, Shrimp, & Scallop", d:"", p:54.95, img:null, subcat:"chefspecial" },
    { e:"", n:"*Chef Special — Filet Mignon, Lobster, Scallop, & Chicken", d:"", p:56.95, img:null, subcat:"chefspecial" },
  ],

  sushiKitchen: [
    { e:"", n:"Miso Soup", d:"", p:4.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Chicken Soup", d:"", p:4.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Ginger Salad", d:"", p:3.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Seaweed Salad", d:"", p:6.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Cucumber & Crab Salad", d:"", p:7.95, img:null, subcat:"soupsalad" },
    { e:"", n:"Edamame", d:"", p:6.95, img:null, subcat:"appetizer" },
    { e:"", n:"Gyoza (6)", d:"", p:7.95, img:null, subcat:"appetizer" },
    { e:"", n:"Tempura", d:"", p:10.95, img:null, subcat:"appetizer" },
    { e:"", n:"Shrimp Tempura", d:"", p:11.95, img:null, subcat:"appetizer" },
    { e:"", n:"Vegetable Tempura", d:"", p:12.95, img:null, subcat:"tempura" },
    { e:"", n:"Shrimp Tempura", d:"", p:16.95, img:null, subcat:"tempura" },
    { e:"", n:"Mixed Tempura", d:"Shrimp, scallop, vegetable", p:16.95, img:null, subcat:"tempura" },
    { e:"", n:"Seafood Tempura", d:"Shrimp, scallop, red snapper, scallop", p:19.95, img:null, subcat:"tempura" },
    { e:"", n:"Bento — Chicken Teriyaki", d:"", p:15.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Beef Teriyaki", d:"", p:17.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Shrimp Teriyaki", d:"", p:17.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Salmon Teriyaki", d:"", p:17.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Korean BBQ Steak 🆕", d:"", p:18.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Chicken & Shrimp", d:"", p:19.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Chicken & Beef", d:"", p:19.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — Beef & Shrimp 🆕", d:"", p:20.95, img:null, subcat:"bento" },
    { e:"", n:"Bento — K-BBQ Steak & Shrimp 🆕", d:"", p:21.95, img:null, subcat:"bento" },
    { e:"", n:"Plain Udon", d:"", p:11.95, img:null, subcat:"udonrice" },
    { e:"", n:"Kitsune Udon", d:"Fried tofu & vegetable", p:12.95, img:null, subcat:"udonrice" },
    { e:"", n:"Tempura Udon", d:"Fried shrimp & vegetable", p:15.95, img:null, subcat:"udonrice" },
    { e:"", n:"Chicken Udon", d:"Boiled chicken & vegetable", p:14.95, img:null, subcat:"udonrice" },
    { e:"", n:"Plain Fried Rice", d:"", p:8.95, img:null, subcat:"udonrice" },
    { e:"", n:"Shrimp Fried Rice", d:"", p:15.95, img:null, subcat:"udonrice" },
    { e:"", n:"Chicken Fried Rice", d:"", p:14.95, img:null, subcat:"udonrice" },
    { e:"", n:"Beef Fried Rice", d:"", p:15.95, img:null, subcat:"udonrice" },
    { e:"", n:"California Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Asparagus Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Crab Roll", d:"", p:4.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Tuna Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Spicy Tuna Roll", d:"", p:9.50, img:null, subcat:"rollmaki" },
    { e:"", n:"Spider Roll", d:"", p:13.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Cucumber Roll", d:"", p:5.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Rainbow Roll", d:"", p:13.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Yellowtail Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Georgia Roll", d:"", p:13.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Salmon Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Shrimp Tempura Roll", d:"", p:9.50, img:null, subcat:"rollmaki" },
    { e:"", n:"Eel Roll", d:"", p:11.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Bagel Roll", d:"", p:11.50, img:null, subcat:"rollmaki" },
    { e:"", n:"Salmon Skin Roll", d:"", p:8.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Avocado Roll", d:"", p:7.00, img:null, subcat:"rollmaki" },
    { e:"", n:"Volcano Roll", d:"", p:13.95, img:null, subcat:"rollmaki" },
    { e:"", n:"Fuji Ya Roll", d:"Eel and avocado on top of shrimp tempura and cream cheese", p:16.95, img:null, subcat:"rolls" },
    { e:"", n:"Osaka Roll", d:"Avocado on top of eel and cream cheese", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"New York Roll", d:"Tuna and salmon with spicy sauce", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"Chicago Roll", d:"Shrimp tempura and sweet potato with cucumber", p:12.95, img:null, subcat:"rolls" },
    { e:"", n:"Alaska Roll", d:"California roll topped with smoked salmon and avocado", p:12.95, img:null, subcat:"rolls" },
    { e:"", n:"Super Crunch Roll", d:"Tempura batter and masago with mayo on top of ebi", p:11.95, img:null, subcat:"rolls" },
    { e:"", n:"Aloha Roll", d:"Salmon, tuna, asparagus, tobiko, cream cheese with deep fried sauce on side", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"New Croquette Roll", d:"Krab, avocado, cheese, cucumber with soybean wrap", p:12.95, img:null, subcat:"rolls" },
    { e:"", n:"Kappa River", d:"Krab, shrimp, avocado wrapped in sliced cucumber with spicy mayo, eel sauce, and ponzu", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"Crazy Crab", d:"Krab tempura roll topped with krab, spicy mayo, and eel sauce", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"Snow King", d:"Shrimp tempura roll topped with spicy tuna covered with tempura flakes", p:13.95, img:null, subcat:"rolls" },
    { e:"", n:"Pink Lady", d:"Krab, red snapper, salmon, flash fried till crispy brown wrapped in soy bean paper", p:14.95, img:null, subcat:"rolls" },
    { e:"", n:"Happy Roll", d:"Steamed shrimp, avocado, cucumber, eel, fried with spicy mayo and eel sauce on top", p:16.95, img:null, subcat:"rolls" },
    { e:"", n:"Jumbo Shrimp Crunch Roll", d:"Green soy wrap with spicy crunch, cream cheese, cucumber, avocado, with spicy mayo and eel sauce on top", p:15.95, img:null, subcat:"rolls" },
    { e:"", n:"*Chef's Special", d:"Assorted sushi, sashimi, maki, & roe", p:39.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Fuji Special", d:"Chef's choice of sushi, sashimi, and maki", p:27.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Sushi & Sashimi Combo", d:"7 pcs sashimi & 8 pcs sushi", p:28.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Chirashi Don", d:"Combo sashimi on top of sushi rice", p:18.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Sushi Regular", d:"", p:19.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Sashimi Regular", d:"", p:27.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Sushi Deluxe", d:"", p:27.95, img:null, subcat:"sushispecial" },
    { e:"", n:"*Sashimi Deluxe", d:"", p:33.95, img:null, subcat:"sushispecial" },
    { e:"", n:"Create Your Own Roll", d:"Choose 1 wrap (Roasted Seaweed, California Style, Vermicelli, Pink Soypaper, or Green Soypaper) + 3 fillings (tuna, salmon, smoked salmon, red snapper, shrimp, tempura shrimp, krab meat, tamago, masago, squid, octopus, mackerel, white tuna, steak, chicken, spicy calamari, seaweed, sweet tofu, avocado, asparagus, cucumber, tempura flake, carrot) + 1 spread/topping (teriyaki, spicy mayo, regular mayo, sriracha, sesame, wasabi mayo) · Add-ons: cream cheese +1, deep fried roll +1", p:9.95, img:null, subcat:"buildyourown" },
  ],

  drinks: [
    { e:"", n:"Soda Can", d:"No refill", p:2.5, img:null },
    { e:"", n:"Iced Tea", d:"", p:2.95, img:null },
    { e:"", n:"Chinese Tea", d:"Jasmine", p:2.95, img:null },
    { e:"", n:"Lemonade", d:"", p:2.95, img:null },
    { e:"", n:"Juice", d:"Orange, cranberry, or apple", p:3.95, img:null },
    { e:"", n:"Thai Tea", d:"Hot or iced", p:3.95, img:null },
    { e:"", n:"Green Tea Cup", d:"", p:2.95, img:null },
    { e:"", n:"Green Tea Pot", d:"", p:4.95, img:null },
  ],

};
// ── CART STATE
let cart = [];
let guestCount = 2;
let usePoints = false;
const pickupType = 'instore';

// ─────────────────────────────────
// DELIVERY
// ─────────────────────────────────
const RESTAURANT_COORDS = { lat: 33.8454, lng: -84.2486 }; // 4135 Lavista Rd #310, Tucker, GA 30084
let orderType = 'pickup'; // 'pickup' or 'delivery'
let selectedDeliveryFee = null;
let selectedDeliveryDistance = null;
let deliveryAddressVerified = false;
let selectedDeliveryDate = null;   // Date object, midnight-local
let selectedDeliveryTimeLabel = null;

function haversineMiles(lat1, lng1, lat2, lng2) {
  const toRad = d => d * Math.PI / 180;
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getDeliveryFeeForDistance(miles) {
  if (miles <= 5) return 3.00;
  if (miles <= 7) return 5.00;
  return null; // outside delivery area
}

function selectOrderType(type) {
  if (type === 'delivery' && !serviceStatus.delivery) {
    const note = document.getElementById('order-type-paused-note');
    if (note) { note.style.display = 'block'; note.textContent = '🛵 Delivery is temporarily paused. Please choose Pickup, or call us at (770) 270-1188.'; }
    return;
  }
  const note = document.getElementById('order-type-paused-note');
  if (note) note.style.display = 'none';
  orderType = type;
  document.getElementById('ot-pickup-btn')?.classList.toggle('selected', type === 'pickup');
  document.getElementById('ot-delivery-btn')?.classList.toggle('selected', type === 'delivery');
  document.getElementById('pickup-section').style.display = type === 'pickup' ? 'block' : 'none';
  document.getElementById('delivery-section').style.display = type === 'delivery' ? 'block' : 'none';
  if (type === 'delivery' && !document.getElementById('delivery-date-grid').children.length) {
    buildDeliveryDateGrid();
  }
  buildCheckoutSummary();
}

async function checkDeliveryAddress() {
  const input = document.getElementById('delivery-address');
  const statusEl = document.getElementById('delivery-address-status');
  const address = input?.value.trim();
  if (!address) { statusEl.textContent = 'Please enter your delivery address.'; statusEl.style.color = '#c0392b'; return; }
  statusEl.textContent = 'Checking address...'; statusEl.style.color = 'var(--muted)';
  deliveryAddressVerified = false;
  selectedDeliveryFee = null;
  document.getElementById('delivery-time-block').style.display = 'none';
  try {
    const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&q=' + encodeURIComponent(address);
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    const data = await res.json();
    if (!data || !data.length) {
      statusEl.textContent = "⚠️ We couldn't find that address. Please double-check and try again.";
      statusEl.style.color = '#c0392b';
      return;
    }
    const lat = parseFloat(data[0].lat), lng = parseFloat(data[0].lon);
    const miles = haversineMiles(RESTAURANT_COORDS.lat, RESTAURANT_COORDS.lng, lat, lng);
    const fee = getDeliveryFeeForDistance(miles);
    if (fee === null) {
      statusEl.innerHTML = `⚠️ Sorry, that address is about ${miles.toFixed(1)} miles away — outside our delivery area (7 mi max). Please try Pickup, or order via DoorDash.`;
      statusEl.style.color = '#c0392b';
      selectedDeliveryDistance = miles;
      return;
    }
    selectedDeliveryFee = fee;
    selectedDeliveryDistance = miles;
    deliveryAddressVerified = true;
    statusEl.innerHTML = `✅ Delivery available! ~${miles.toFixed(1)} mi away · Delivery fee: $${fee.toFixed(2)}`;
    statusEl.style.color = '#27ae60';
    document.getElementById('delivery-time-block').style.display = 'block';
    buildDeliveryDateGrid();
    buildCheckoutSummary();
  } catch(e) {
    console.error('Delivery geocode error:', e);
    statusEl.textContent = '⚠️ Could not check that address right now. Please try again.';
    statusEl.style.color = '#c0392b';
  }
}

function buildDeliveryDateGrid() {
  const grid = document.getElementById('delivery-date-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const today = new Date(); today.setHours(0,0,0,0);
  for (let i = 0; i < 7; i++) {
    const d = new Date(today); d.setDate(d.getDate() + i);
    const cell = document.createElement('div');
    cell.className = 'delivery-date-cell' + (i === 0 ? ' selected' : '');
    cell.innerHTML = `<div class="dd-dow">${i === 0 ? 'Today' : d.toLocaleDateString('en-US',{weekday:'short'})}</div><div class="dd-num">${d.getDate()}</div>`;
    cell.addEventListener('click', () => {
      grid.querySelectorAll('.delivery-date-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      selectedDeliveryDate = d;
      buildDeliveryTimeSlots(d);
    });
    grid.appendChild(cell);
  }
  selectedDeliveryDate = today;
  buildDeliveryTimeSlots(today);
}

function buildDeliveryTimeSlots(date) {
  const grid = document.getElementById('delivery-time-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const day = date.getDay();
  const isLateNight = (day === 5 || day === 6); // Fri & Sat → later last delivery
  const startMins = 17 * 60; // 5:00 PM
  const endMins = (isLateNight ? 22 * 60 + 30 : 21 * 60 + 30); // 10:30PM Fri/Sat, 9:30PM otherwise
  // Require at least 45 min lead time for prep + driving when ordering for today
  const minMinsToday = isToday ? (now.getHours() * 60 + now.getMinutes() + 45) : -1;

  let firstEnabled = null;
  for (let mins = startMins; mins <= endMins; mins += 30) {
    const isPast = isToday && mins < minMinsToday;
    const d = new Date(); d.setHours(Math.floor(mins/60), mins%60, 0, 0);
    const label = d.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
    const chip = document.createElement('div');
    chip.className = 'time-chip' + (isPast ? ' unavailable' : '');
    chip.textContent = label;
    if (!isPast) {
      if (!firstEnabled) { chip.classList.add('selected'); selectedDeliveryTimeLabel = label; firstEnabled = chip; }
      chip.addEventListener('click', function() {
        grid.querySelectorAll('.time-chip').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        selectedDeliveryTimeLabel = label;
      });
    }
    grid.appendChild(chip);
  }
  if (!firstEnabled) {
    selectedDeliveryTimeLabel = null;
    const msg = document.createElement('div');
    msg.style.cssText = 'font-size:12px;color:var(--muted);padding:8px 0;';
    msg.textContent = 'No more delivery times available today — please pick another date.';
    grid.appendChild(msg);
  }
}

let serviceStatus = { reservations: true, orders: true, delivery: true };

async function initServiceStatus() {
  // Fast local cache first (avoids flash of enabled state while Firebase loads)
  try {
    const cached = JSON.parse(localStorage.getItem('prb_services') || 'null');
    if (cached) { serviceStatus = { reservations: cached.reservations !== false, orders: cached.orders !== false, delivery: cached.delivery !== false }; applyServiceStatusUI(); }
  } catch(e) {}

  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadServicesFromFirebase, listenServices } = await import(fbUrl);
    const fresh = await loadServicesFromFirebase();
    if (fresh) {
      serviceStatus = { reservations: fresh.reservations !== false, orders: fresh.orders !== false, delivery: fresh.delivery !== false };
      localStorage.setItem('prb_services', JSON.stringify(serviceStatus));
      applyServiceStatusUI();
    }
    // Stay in sync live — if staff flips the switch, guests see it without refreshing
    listenServices(updated => {
      serviceStatus = { reservations: updated.reservations !== false, orders: updated.orders !== false, delivery: updated.delivery !== false };
      applyServiceStatusUI();
    });
  } catch(e) { console.warn('Service status load error:', e); }
}

function applyServiceStatusUI() {
  const reserveBtn = document.querySelector(".qa-btn[onclick=\"goTo('reservation')\"]");
  const orderBtn   = document.querySelector(".qa-btn[onclick=\"goTo('order')\"]");
  const deliveryBtn = document.querySelector(".qa-btn[onclick=\"startDeliveryOrder()\"]");
  const heroOrderBtn = document.querySelector(".order-now-btn");
  [ [reserveBtn, serviceStatus.reservations], [orderBtn, serviceStatus.orders], [deliveryBtn, serviceStatus.delivery] ].forEach(([btn, isOn]) => {
    if (!btn) return;
    btn.style.opacity = isOn ? '1' : '0.45';
    let badge = btn.querySelector('.qa-paused-badge');
    if (!isOn && !badge) {
      badge = document.createElement('div');
      badge.className = 'qa-paused-badge';
      badge.textContent = 'Paused';
      badge.style.cssText = 'font-size:9px;color:#e74c3c;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;margin-top:2px;';
      btn.appendChild(badge);
    } else if (isOn && badge) {
      badge.remove();
    }
  });
  if (heroOrderBtn) {
    heroOrderBtn.style.opacity = serviceStatus.orders ? '1' : '0.45';
  }
  const otDeliveryBtn = document.getElementById('ot-delivery-btn');
  if (otDeliveryBtn) otDeliveryBtn.classList.toggle('disabled', !serviceStatus.delivery);
  const banner = document.getElementById('service-paused-banner');
  if (banner) {
    const pausedList = [];
    if (!serviceStatus.reservations) pausedList.push('Reservations');
    if (!serviceStatus.orders) pausedList.push('Online Ordering');
    if (!serviceStatus.delivery) pausedList.push('Delivery');
    if (pausedList.length) {
      banner.style.display = 'block';
      banner.innerHTML = `<div style="background:#fff3cd;border:1px solid #ffe08a;border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;">
        <div style="font-size:18px;flex-shrink:0;">⏸️</div>
        <div style="font-size:12px;color:#856404;line-height:1.4;">
          <strong>${pausedList.join(' & ')} temporarily paused.</strong> Please call us at (770) 270-1188.
        </div>
      </div>`;
    } else {
      banner.style.display = 'none';
      banner.innerHTML = '';
    }
  }
}


function startDeliveryOrder() {
  if (!serviceStatus.delivery) {
    alert('🛵 Delivery is temporarily paused. Please call us at (770) 270-1188, or try Pickup instead.');
    return;
  }
  window._pendingOrderTypeDelivery = true;
  goTo('order');
}

function openDoorDash() {
  // TODO: DoorDash link - replace with Lucky Key & Fuji Ya's actual DoorDash store URL
  const url = 'https://www.doordash.com/store/TODO-lucky-key-fuji-ya/';
  window.open(url, '_blank');
}

let selectedPointsDiscount = 0;
let tipPercent = 20;
let tipCustom  = null;

// ─────────────────────────────────
// AUTH
// ─────────────────────────────────
const USER_KEY = 'prb_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch(e) { return null; }
}

async function signOut() {
  localStorage.removeItem(USER_KEY);
  try {
    const { getAuth, signOut: fbSignOut } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const auth = getAuth();
    await fbSignOut(auth);
  } catch(e) {}
  updateAuthUI();
}

async function refreshCustomerAdminList() {
  // Fast local cache first (avoids the Admin button flashing hidden on repeat visits)
  try {
    const cached = JSON.parse(localStorage.getItem('prb_admin_emails') || 'null');
    if (cached && cached.length) { window._customerAdminEmails = cached; updateAuthUI(); }
  } catch(e) {}
  // Then refresh from Firebase — same source of truth as the Admin Access list in the admin panel
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadAdminEmailsFromFirebase } = await import(fbUrl);
    const fresh = await loadAdminEmailsFromFirebase();
    if (fresh && fresh.length) {
      window._customerAdminEmails = fresh;
      localStorage.setItem('prb_admin_emails', JSON.stringify(fresh));
      updateAuthUI();
    }
  } catch(e) { console.warn('Admin list sync error:', e); }
}

function updateAuthUI() {
  const user      = getUser();
  const signInBtn = document.getElementById('btn-signin');
  const greetEl   = document.getElementById('hero-greeting');
  const ptsEl     = document.getElementById('home-points');
  const ptsSubEl  = document.getElementById('home-points-sub');
  const ptsValEl  = document.getElementById('home-points-value');
  if (!signInBtn) return;

  const ADMIN_EMAILS = window._customerAdminEmails || ['yshahn@gmail.com', 'ymhahn@gmail.com'];
  const adminBtn = document.getElementById('btn-admin');

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.removeAttribute('href');
    signInBtn.onclick = (e) => { e.preventDefault(); signOut(); };
    if (greetEl) {
      greetEl.textContent = 'Welcome back, ' + user.firstName + '!';
      greetEl.style.cssText = 'color:#fff;font-size:13px;opacity:1;font-weight:500;';
    }
    const pts = user.points || 0;
    if (ptsEl)    ptsEl.textContent    = pts.toLocaleString();
    if (ptsValEl) ptsValEl.textContent = '$' + (pts / 100).toFixed(2);
    if (ptsSubEl) ptsSubEl.textContent = 'Welcome back, ' + (user.firstName || '') + '!';
    const ptLabel = document.getElementById('pt-label');
    if (ptLabel) ptLabel.textContent = 'Redeem Points';
    if (adminBtn) adminBtn.style.display = ADMIN_EMAILS.includes(user.email) ? 'block' : 'none';
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.href = 'login.html';
    signInBtn.onclick = null;
    if (greetEl) {
      greetEl.textContent = 'Welcome back';
      greetEl.style.cssText = 'color:#fff;opacity:0.9;';
    }
    if (ptsEl)    ptsEl.textContent    = '0';
    if (ptsValEl) ptsValEl.textContent = '$0.00';
    if (ptsSubEl) ptsSubEl.textContent = 'Sign in to earn points';
    if (adminBtn) adminBtn.style.display = 'none';
  }
}

function fillUserInfo() {
  const user    = getUser();
  const profile = loadProfile();
  const data    = { ...profile, ...(user || {}) };
  const fnEl    = document.getElementById('gi-firstname');
  const lnEl    = document.getElementById('gi-lastname');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (fnEl)    fnEl.value    = data.firstName || '';
  if (lnEl)    lnEl.value    = data.lastName  || '';
  if (phoneEl) phoneEl.value = data.phone      || '';
  if (emailEl) emailEl.value = data.email      || '';
  if (badge)   badge.style.display = (user || Object.keys(profile).length) ? 'block' : 'none';

  const isGuest = !user;
  const reqNote  = document.getElementById('guest-required-note');
  const reqFn    = document.getElementById('req-firstname');
  const reqPhone = document.getElementById('req-phone');
  const reqEmail = document.getElementById('req-email');
  if (reqNote)  reqNote.style.display  = isGuest ? 'block' : 'none';
  if (reqFn)    reqFn.style.display    = isGuest ? 'inline' : 'none';
  if (reqPhone) reqPhone.style.display = isGuest ? 'inline' : 'none';
  if (reqEmail) reqEmail.style.display = isGuest ? 'inline' : 'none';
}

// ─────────────────────────────────
// NAVIGATION
// ─────────────────────────────────
function goTo(id, pushState = true) {
  if (id === 'reservation' && !serviceStatus.reservations) {
    alert('Reservations are temporarily paused. Please call us at (770) 270-1188 to book a table.');
    return;
  }
  if (id === 'order' && !serviceStatus.orders) {
    alert('Online ordering is temporarily paused. Please call us at (770) 270-1188 to place an order.');
    return;
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('success-screen');
  if (ss) ss.classList.remove('active');
  const screen = document.getElementById('screen-' + id);
  if (screen) screen.classList.add('active');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'flex';
  updateNav(id);
  window.scrollTo(0, 0);
  if (id === 'order') showMenuStep();
  if (id === 'rewards') buildRewardsScreen();
  if (id === 'home') buildHomeScreen();
  if (pushState && id !== 'home') {
    history.pushState({ screen: id }, '', location.pathname + location.search);
  } else if (id === 'home' && pushState) {
    history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  }
  if (id === 'home') {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl + '?v=' + Date.now()).then(({ loadPicksFromFirebase }) => {
      loadPicksFromFirebase().then(picks => {
        if (picks) { localStorage.setItem('lkfy_picks', JSON.stringify(picks)); loadTodaysPicks(); }
      }).catch(() => {});
    }).catch(() => {});
  }
  if (id === 'profile') updateProfileUI();
  if (id === 'reservation') { buildDates(); prefillReservationForm(); buildMyReservations(); resetReservationForm(); }
}

function resetReservationForm() {
  // Runs every time the Reservation screen is opened, so a previous
  // successful (or abandoned) submission never leaves the button stuck on
  // "Processing..." or old text lingering in Special Requests.
  const btn = document.getElementById('confirm-res-btn');
  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Confirm Reservation';
    btn.style.opacity = '1';
  }
  const specialEl = document.getElementById('res-special');
  if (specialEl) specialEl.value = '';
  const guestCountEl = document.getElementById('guest-count');
  if (guestCountEl) guestCountEl.textContent = '2';
}

function navGo(id) { goTo(id); }

function updateNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const item = document.getElementById('nav-' + id);
  if (item) item.classList.add('active');
}

// ─────────────────────────────────
// ORDER STEPS
// ─────────────────────────────────
function showMenuStep() {
  document.getElementById('step-menu').style.display = 'flex';
  document.getElementById('step-checkout').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const ac = document.getElementById('step-auth-choice');
  if (ac) ac.style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Order';
  document.getElementById('order-screen-sub').textContent = 'Select your items';
// 시간에 따라 자동으로 탭 선택
  const isLunchTime = isLunchHours();

  const defaultTab = isLunchTime ? 'lunch' : 'chineseDinner';
  const defaultTab2 = [...document.querySelectorAll('.menu-tab')].find(t => t.getAttribute('onclick')?.includes("'" + defaultTab + "'"));
  if (defaultTab2) {
    switchTab(defaultTab2, defaultTab);
  }
}

async function initPointsRedeem() {
  const user = getUser();
  if (!user) return;
  const section = document.getElementById('points-redeem-section');
  const btnsEl  = document.getElementById('points-redeem-btns');
  const subEl   = document.getElementById('pt-sub');
  if (!section || !btnsEl) return;
  // Always load latest points from Firebase before showing redeem options
  let pts = user.points || 0;
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadPointsFromFirebase } = await import(fbUrl);
    const fbPts = await loadPointsFromFirebase(user.email);
    if (fbPts && fbPts.points !== undefined) {
      pts = fbPts.points;
      // Sync to localStorage
      const updatedUser = { ...user, points: fbPts.points, tierPoints: fbPts.tierPoints || user.tierPoints || 0, pointsLog: fbPts.pointsLog || user.pointsLog || [] };
      localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
    }
  } catch(e) {
    console.warn('Could not load points from Firebase:', e);
  }
  const maxDiscount = Math.floor(pts / 500) * 5;
  if (maxDiscount <= 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  if (subEl) subEl.textContent = pts.toLocaleString() + ' pts available';
  btnsEl.innerHTML = '';
  const noneBtn = document.createElement('button');
  noneBtn.innerHTML = '<div>No discount</div>';
  noneBtn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--ink);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--ink);color:var(--gold);transition:all 0.15s;';
  noneBtn.addEventListener('click', () => selectPointsDiscount(0, btnsEl));
  btnsEl.appendChild(noneBtn);
  for (let d = 5; d <= maxDiscount; d += 5) {
    const btn = document.createElement('button');
    btn.innerHTML = '<div>$' + d + ' off</div><div style="font-size:10px;opacity:0.7;">' + (d * 100) + ' pts</div>';
    btn.dataset.discount = d;
    btn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--border);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--card-bg);color:var(--ink);transition:all 0.15s;';
    btn.addEventListener('click', () => selectPointsDiscount(d, btnsEl));
    btnsEl.appendChild(btn);
  }
  selectedPointsDiscount = 0;
  usePoints = false;
}

function selectPointsDiscount(amount, btnsEl) {
  selectedPointsDiscount = amount;
  usePoints = amount > 0;
  const btns = btnsEl.querySelectorAll('button');
  btns.forEach(btn => {
    const isSelected = (amount === 0 && btn.textContent.includes('No discount')) ||
                       (btn.dataset.discount && parseInt(btn.dataset.discount) === amount);
    btn.style.background = isSelected ? 'var(--ink)' : 'var(--card-bg)';
    btn.style.color = isSelected ? 'var(--gold)' : 'var(--ink)';
    btn.style.borderColor = isSelected ? 'var(--ink)' : 'var(--border)';
  });
  buildCheckoutSummary();
}

// ─────────────────────────────────
// NEW CHECKOUT FLOW: My Cart → Contact Info → Register/Guest Choice → Checkout
// ─────────────────────────────────

// Temp storage for contact info collected before register/guest choice
let _pendingContactInfo = null;

// ── Group flat cart array into {main item, toppings[]} groups.
function groupCartItems() {
  const groups = [];
  cart.forEach(item => {
    const lastGroup = groups[groups.length - 1];
    const isTopping = lastGroup && item.name.startsWith(lastGroup.name + ' + ');
    if (isTopping) {
      lastGroup.toppings.push(item);
    } else {
      groups.push({ ...item, toppings: [] });
    }
  });
  return groups;
}

function goToCart() {
  if (cart.length === 0) return;
  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const ac = document.getElementById('step-auth-choice');
  if (ac) ac.style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'My Cart';
  document.getElementById('order-screen-sub').textContent = 'Review your order';
  buildCartScreen();
  document.getElementById('screen-order').scrollTop = 0;
}

function buildCartScreen() {
  const listEl = document.getElementById('my-cart-list');
  const sumEl  = document.getElementById('my-cart-summary');
  const btnEl  = document.getElementById('my-cart-checkout-btn');
  if (!listEl) return;

  if (cart.length === 0) {
    const cartScreenVisible = document.getElementById('step-cart')?.style.display === 'flex';
    if (cartScreenVisible) { backToMenu(); return; }
    listEl.innerHTML = '<div style="padding:40px 0;text-align:center;color:var(--muted);font-size:13px;">Your cart is empty.</div>';
    if (sumEl) sumEl.innerHTML = '';
    if (btnEl) btnEl.style.display = 'none';
    return;
  }
  if (btnEl) btnEl.style.display = 'block';

// 같은 이름 아이템 그룹핑 (수량 합산)
  const rawGroups = groupCartItems();
  const groupMap = new Map();
  rawGroups.forEach(item => {
    if (groupMap.has(item.name)) {
      groupMap.get(item.name).qty++;
    } else {
      groupMap.set(item.name, { ...item, qty: 1 });
    }
  });
  const groups = [...groupMap.values()];
  listEl.innerHTML = '';

  groups.forEach((item, gi) => {
    const toppingHtml = item.toppings.map(t =>
      `<div style="display:flex;align-items:center;gap:6px;padding:3px 0 0 36px;font-size:12px;color:var(--muted);">
        <span>${t.emoji || '🧂'}</span>
        <span style="flex:1;">${t.name.replace(item.name + ' + ', '')}</span>
        <span style="color:var(--gold);">+$${parseFloat(t.price).toFixed(2)}</span>
      </div>`
    ).join('');

    const itemTotal = parseFloat(item.price) + item.toppings.reduce((s,t) => s + parseFloat(t.price), 0);
    const qty = item.qty;

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:14px 0;border-bottom:1px solid var(--border);';
    row.innerHTML = `
      <div style="font-size:22px;margin-top:2px;">${item.emoji}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:500;">${item.name}</div>
        ${toppingHtml}
        <div style="font-size:13px;color:var(--gold);font-weight:600;margin-top:4px;">$${itemTotal.toFixed(2)}</div>
      </div>
      <div class="mi-qty-ctrl" style="flex-shrink:0;display:flex;align-items:center;gap:8px;border:1px solid var(--border);border-radius:20px;padding:4px 10px;">
        <button class="mi-qty-minus" style="width:22px;height:22px;border:none;background:none;font-size:16px;color:var(--ink);cursor:pointer;line-height:1;">−</button>
        <span class="mi-qty-num" style="font-size:13px;font-weight:600;min-width:14px;text-align:center;">${qty}</span>
        <button class="mi-qty-plus" style="width:22px;height:22px;border:none;background:none;font-size:16px;color:var(--ink);cursor:pointer;line-height:1;">+</button>
      </div>
      <button class="cart-del-btn" style="margin-left:4px;padding:6px 10px;border:1px solid #fde8e8;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;flex-shrink:0;">🗑</button>
    `;

    row.querySelector('.mi-qty-minus').addEventListener('click', () => cartQty(item.name, -1));
    row.querySelector('.mi-qty-plus').addEventListener('click', () => cartQty(item.name, 1));
    row.querySelector('.cart-del-btn').addEventListener('click', () => removeCartGroupByName(item.name, item.toppings.length));

    listEl.appendChild(row);
  });

  if (sumEl) {
    const subtotal = cart.reduce((s, i) => s + i.price, 0);
    sumEl.innerHTML =
      '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600;padding:10px 0;border-top:1px solid var(--border);">' +
        '<span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span>' +
      '</div>' +
      '<div style="font-size:11px;color:var(--muted);">Tax, platform fee, and tip are calculated at checkout.</div>';
  }
}

function removeCartGroupByName(name, toppingCount) {
  const mainIdx = cart.findIndex(c => c.name === name);
  if (mainIdx === -1) return;
  cart.splice(mainIdx, 1 + toppingCount);
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

function goToCheckout() {
  if (cart.length === 0) return;

  const user = getUser();
  if (user) {
    proceedToCheckoutScreen();
    return;
  }

  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Your Info';
  document.getElementById('order-screen-sub').textContent = "Let's get started";

  const profile = loadProfile();
  const fn = document.getElementById('ci-firstname');
  const ln = document.getElementById('ci-lastname');
  const ph = document.getElementById('ci-phone');
  const em = document.getElementById('ci-email');
  if (fn && !fn.value) fn.value = profile.firstName || '';
  if (ln && !ln.value) ln.value = profile.lastName  || '';
  if (ph && !ph.value) ph.value = profile.phone      || '';
  if (em && !em.value) em.value = profile.email      || '';

  document.getElementById('screen-order').scrollTop = 0;
}

function submitContactInfo() {
  const firstName = document.getElementById('ci-firstname')?.value.trim() || '';
  const lastName  = document.getElementById('ci-lastname')?.value.trim()  || '';
  const phone     = document.getElementById('ci-phone')?.value.trim()     || '';
  const email     = document.getElementById('ci-email')?.value.trim()     || '';

  if (!firstName || !/[a-zA-Z]/.test(firstName)) { alert('Please enter your first name.'); document.getElementById('ci-firstname')?.focus(); return; }
  if (!phone || phone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number.'); document.getElementById('ci-phone')?.focus(); return; }
  if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); document.getElementById('ci-email')?.focus(); return; }

  _pendingContactInfo = { firstName, lastName, phone, email };

  document.getElementById('step-contact-info').style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'flex';
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (def) def.style.display = 'block';
  if (pwd) pwd.style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Almost There';
  document.getElementById('order-screen-sub').textContent = '';
  document.getElementById('screen-order').scrollTop = 0;
}

function backToContactInfo() {
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Your Info';
  document.getElementById('order-screen-sub').textContent = "Let's get started";
}

function showRegisterPasswordStep() {
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (def) def.style.display = 'none';
  if (pwd) pwd.style.display = 'block';
  document.getElementById('quick-reg-password')?.focus();
}

function backToAuthChoiceDefault() {
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (pwd) pwd.style.display = 'none';
  if (def) def.style.display = 'block';
}

function continueAsGuest() {
  proceedToCheckoutScreen();
}

async function quickRegister() {
  const password = document.getElementById('quick-reg-password')?.value || '';
  if (!password || password.length < 6) {
    alert('Please enter a password with at least 6 characters.');
    document.getElementById('quick-reg-password')?.focus();
    return;
  }
  if (!_pendingContactInfo) { continueAsGuest(); return; }

  const { firstName, lastName, email, phone } = _pendingContactInfo;
  const signupBonus = [{ desc: 'Sign Up Bonus', pts: 500, date: Date.now() }];
  const user = {
    firstName: firstName || 'Guest',
    lastName:  lastName  || '',
    email,
    phone,
    points:     500,       // $5 in rewards, usable immediately
    tierPoints: 0,
    pointsLog:  signupBonus,
    createdAt:  Date.now(),
    lastReset:  new Date().toISOString(), // prevent checkYearlyReset() from firing immediately on a fresh signup
  };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem('prb_profile', JSON.stringify({ firstName, lastName, email, phone }));

  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { saveProfileToFirebase, savePointsToFirebase } = await import(fbUrl);
    await saveProfileToFirebase({ firstName, lastName, email, phone, createdAt: user.createdAt });
    await savePointsToFirebase(email, 500, signupBonus, 500);
    console.log('✅ New member saved to Firebase:', email);
  } catch(e) {
    console.warn('Firebase signup save failed (user still created locally):', e);
  }

  updateAuthUI();
  showToastMsg('🎁 Account created! $5 in rewards added.');
  proceedToCheckoutScreen();
}

function proceedToCheckoutScreen() {
  document.getElementById('step-menu').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  document.getElementById('step-checkout').style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Checkout';
  document.getElementById('order-screen-sub').textContent = 'Review & pay';
  tipPercent = 20; tipCustom = null;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  const def = document.querySelector('.tip-btn[onclick="selectTip(this, 20)"]');
  if (def) def.classList.add('selected');
  const cw = document.getElementById('tip-custom-wrap');
  if (cw) cw.style.display = 'none';

  fillUserInfo();

  const user = getUser();
  if (!user && _pendingContactInfo) {
    const fnEl = document.getElementById('gi-firstname');
    const lnEl = document.getElementById('gi-lastname');
    const phEl = document.getElementById('gi-phone');
    const emEl = document.getElementById('gi-email');
    if (fnEl) fnEl.value = _pendingContactInfo.firstName || '';
    if (lnEl) lnEl.value = _pendingContactInfo.lastName  || '';
    if (phEl) phEl.value = _pendingContactInfo.phone     || '';
    if (emEl) emEl.value = _pendingContactInfo.email     || '';
    localStorage.setItem('prb_profile', JSON.stringify(_pendingContactInfo));
  }

  buildCheckoutSummary();
  buildPickupSlots();
  initPointsRedeem();
  if (window._pendingOrderTypeDelivery) {
    window._pendingOrderTypeDelivery = false;
    selectOrderType('delivery');
  } else {
    selectOrderType('pickup');
  }
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() {
  _pendingContactInfo = null;
  showMenuStep();
}

function buildCheckoutSummary() {
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    const groups = [];
    cart.forEach(item => {
      const lastGroup = groups[groups.length - 1];
      const isTopping = lastGroup && item.name.startsWith(lastGroup.name + ' + ');
      if (isTopping) { lastGroup.toppings.push(item); }
      else { groups.push({ ...item, toppings: [] }); }
    });
    window._cartGroups = groups;
    editList.innerHTML = '';
    groups.forEach((item, gi) => {
      const toppingHtml = item.toppings.map(t =>
        `<div style="display:flex;align-items:center;gap:6px;padding:3px 0 0 36px;font-size:12px;color:var(--muted);">
          <span>${t.emoji || '🧂'}</span>
          <span style="flex:1;">${t.name.replace(item.name + ' + ', '')}</span>
          <span style="color:var(--gold);">+$${parseFloat(t.price).toFixed(2)}</span>
        </div>`
      ).join('');
      const itemTotal = parseFloat(item.price) + item.toppings.reduce((s,t) => s + parseFloat(t.price), 0);
      const row = document.createElement('div');
      row.className = 'cart-edit-row';
      row.style.alignItems = 'flex-start';
      row.innerHTML = `
        <div class="cer-emoji" style="margin-top:2px;">${item.emoji}</div>
        <div class="cer-name" style="flex:1;min-width:0;"><div>${item.name}</div>${toppingHtml}</div>
        <div class="cer-controls">
          <button class="cer-del" onclick="removeCartGroup(${gi})" style="padding:6px 10px;border:1px solid #fde8e8;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;">🗑</button>
        </div>
        <div class="cer-price">$${itemTotal.toFixed(2)}</div>`;
      editList.appendChild(row);
    });
  }
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = selectedPointsDiscount || 0;
  const deliveryFee = (orderType === 'delivery') ? (selectedDeliveryFee || 0) : 0;
  const total       = Math.max(subtotal + platformFee + tax + tip + deliveryFee - discount, 0.50);
  const tipAmountEl = document.getElementById('tip-amount');
  if (tipAmountEl) tipAmountEl.textContent = 'Tip: $' + tip.toFixed(2);
  el.innerHTML =
    '<div class="os-row os-label"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Platform Fee</span><span>$' + platformFee.toFixed(2) + '</span></div>' +
    (deliveryFee > 0 ? '<div class="os-row os-label"><span>Delivery Fee</span><span>$' + deliveryFee.toFixed(2) + '</span></div>' : '') +
    '<div class="os-row os-label"><span>Tax (8.9%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Tip</span><span>$' + tip.toFixed(2) + '</span></div>' +
    (discount ? '<div class="os-row os-label" style="color:var(--gold)"><span>Points Discount</span><span>−$' + discount.toFixed(2) + '</span></div>' : '') +
    '<div class="os-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>';
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) payBtn.textContent = 'Pay $' + total.toFixed(2);
  if (payBtn) payBtn.style.display = cart.length > 0 ? 'block' : 'none';
}

function removeCartGroup(gi) {
  const groups = window._cartGroups || [];
  const group = groups[gi];
  if (!group) return;
  const mainIdx = cart.findIndex(c => c.name === group.name);
  if (mainIdx === -1) return;
  const removeCount = 1 + group.toppings.length;
  cart.splice(mainIdx, removeCount);
  updateCartBar();
  buildCheckoutSummary();
}

function cartQty(name, delta) {
  if (delta === -1) {
    const idx = cart.findLastIndex ? cart.findLastIndex(i => i.name === name)
                                   : [...cart].reverse().findIndex(i => i.name === name);
    if (idx !== -1) {
      const realIdx = cart.findLastIndex ? idx : cart.length - 1 - idx;
      cart.splice(realIdx, 1);
    }
  } else {
    const existing = cart.find(i => i.name === name);
    if (existing) cart.push({ ...existing });
  }
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

function cartRemove(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

// ─────────────────────────────────
// MENU
// ─────────────────────────────────
function buildMenu(tab) {
  const list = document.getElementById('menu-list');
  if (!list) return;
  // Firebase 데이터 머지
  if (!window.firebaseMenuData) {
    import('/js/firebase-menu.js')
      .then(({ loadMenuFromFirebase }) => loadMenuFromFirebase())
      .then(data => { if (data) { window.firebaseMenuData = data; buildMenu(tab); } })
      .catch(() => {});
    // 일단 로컬 데이터로 렌더링 계속
  }
  Array.from(list.children).forEach(child => { if (child.id !== 'photo-hint') child.remove(); });

  // Always use local menuData as the source of truth for Lucky Key & Fuji Ya.
  // Firebase data (soldOut, price overrides) is merged on top if available.
const localItems = menuData[tab] || [];
const fbItems = (window.firebaseMenuData && window.firebaseMenuData[tab]) || [];

// Firebase 아이템 기준으로 머지 — 신규 아이템도 포함
let items;
if (fbItems.length > 0) {
  // Firebase 데이터를 기본으로 사용
  items = fbItems.map(fbItem => {
    const localItem = localItems.find(l => l.n === fbItem.n);
    return {
      e: fbItem.e || localItem?.e || '',
      n: fbItem.n,
      d: fbItem.d || localItem?.d || '',
      p: fbItem.p !== undefined ? fbItem.p : (localItem?.p || 0),
      img: fbItem.img || localItem?.img || null,
      subcat: fbItem.subcat || localItem?.subcat || null,
      soldOut: fbItem.soldOut || false,
      options: fbItem.options || localItem?.options || null,
      multiSelect: fbItem.multiSelect || localItem?.multiSelect || null,
      toppings: fbItem.toppings || localItem?.toppings || null,
    };
  });
} else {
  // Firebase 없으면 로컬 데이터 사용
  items = localItems;
}

  // subcat is explicitly set on every item now — no fallback mapping needed
  const SUBCAT_MAP = {};

  if (SUBCAT_MAP[tab]) {
    items = items.map(item => {
      if (item.subcat) return item;
      for (const [key, names] of Object.entries(SUBCAT_MAP[tab])) {
        if (names.includes(item.n)) return { ...item, subcat: key };
      }
      return item;
    });
  }

  const _sectionConfig =
    (window._firebaseSections && window._firebaseSections[tab]) ||
    JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab] ||
    null;

  if (_sectionConfig && _sectionConfig.length > 0) {
    const _sectionOrder = _sectionConfig.map(s => s.key);
    items = items.slice().sort((a, b) => {
      const ai = a.subcat ? _sectionOrder.indexOf(a.subcat) : 9999;
      const bi = b.subcat ? _sectionOrder.indexOf(b.subcat) : 9999;
      if (ai !== bi) return ai - bi;
      return 0;
    });
  }

  const hint = document.getElementById('photo-hint');
  if (hint) hint.style.display = items.some(i => i.img) ? 'block' : 'none';
  const list2 = document.getElementById('menu-list');
  if (list2) {
    Array.from(list2.children).forEach(child => { if (child.id !== 'photo-hint') child.remove(); });
  }

  if ((tab === 'lunch') && !window._lunchAccordion) { window._lunchAccordion = {}; }

  const DEFAULT_SEC_CONFIG = {
    lunch: [
      // ── Chinese Lunch ──
      { key:'cn_appetizer', emoji:'🥡', label:'Chinese Lunch — Appetizer', sub:'' },
      { key:'cn_soup',      emoji:'🥣', label:'Soup',             sub:'' },
      { key:'cn_padthai',   emoji:'🍝', label:'Pad Thai',         sub:'' },
      { key:'cn_friedrice', emoji:'🍚', label:'Fried Rice',       sub:'Served with soup & choice of spring roll or egg roll (+$1.00)' },
      { key:'cn_lomein',    emoji:'🍜', label:'Lo Mein',          sub:'' },
      { key:'cn_chicken',   emoji:'🍗', label:'Chicken',          sub:'Served with fried rice, soup, & appetizer (spring roll or egg roll +$1.00)' },
      { key:'cn_pork',      emoji:'🥓', label:'Pork',             sub:'' },
      { key:'cn_beef',      emoji:'🥩', label:'Beef',             sub:'' },
      { key:'cn_seafood',   emoji:'🦐', label:'Seafood',          sub:'' },
      { key:'cn_vegetable', emoji:'🥦', label:'Vegetable',        sub:'' },
      // ── Sushi Lunch ──
      { key:'su_appetizer',  emoji:'🍣', label:'Sushi Lunch — Appetizer', sub:'' },
      { key:'su_soupsalad',  emoji:'🥣', label:'Soup & Salad',    sub:'' },
      { key:'su_udonrice',   emoji:'🍲', label:'Udon & Fried Rice', sub:'' },
      { key:'su_expressbox', emoji:'🍱', label:'Express Box',     sub:'Served with soup, salad, California roll (2), veg tempura or hibachi vegetable · Soup not available for takeout' },
      { key:'su_ricenoodle', emoji:'🍜', label:'Rice Noodle',     sub:'' },
      // ── Hibachi Lunch ──
      { key:'hb_soupsalad', emoji:'🔥', label:'Hibachi Lunch — Soup & Salad', sub:'' },
      { key:'hb_hibachi',   emoji:'🔥', label:'Hibachi Lunch',    sub:'Served with soup, vegetables, steamed rice (fried rice +$2.95)' },
      { key:'hb_appetizer', emoji:'🥟', label:'Appetizer',        sub:'' },
      { key:'hb_bento',     emoji:'🍱', label:'Bento Box',        sub:'Served with soup, salad, 2 cali roll, veg tempura or hibachi veg · Soup not available for takeout' },
    ],
    chineseDinner: [
      { key:'appetizer',    emoji:'🥟', label:'Appetizer',       sub:'' },
      { key:'soup',         emoji:'🥣', label:'Soup',            sub:'' },
      { key:'housespecials',emoji:'⭐', label:'House Specials',  sub:'' },
      { key:'chicken',      emoji:'🍗', label:'Chicken',         sub:'' },
      { key:'pork',         emoji:'🥓', label:'Pork',            sub:'' },
      { key:'beef',         emoji:'🥩', label:'Beef',            sub:'' },
      { key:'fish',         emoji:'🐟', label:'Fish',            sub:'' },
      { key:'seafood',      emoji:'🦐', label:'Seafood',         sub:'' },
      { key:'dieter',       emoji:'🥗', label:"Dieter's Special",sub:'' },
      { key:'vegetable',    emoji:'🥦', label:'Vegetable',       sub:'' },
      { key:'vegside',      emoji:'🥬', label:'Vegetable Side',  sub:'' },
      { key:'eggfuyung',    emoji:'🍳', label:'Egg Fu Yung',     sub:'' },
      { key:'friedrice',    emoji:'🍚', label:'Fried Rice',      sub:'' },
      { key:'lomein',       emoji:'🍜', label:'Lo Mein / Chow Huo Fun', sub:'' },
      { key:'maifun',       emoji:'🍜', label:'Mai Fun (Rice Noodle)', sub:'' },
      { key:'padthai',      emoji:'🍝', label:'Pad Thai',        sub:'' },
      { key:'combo',        emoji:'🍱', label:'Chinese Dinner Combo', sub:'' },
    ],
    hibachiDinner: [
      { key:'soupsalad',   emoji:'🥣', label:'Soup & Salad',  sub:'' },
      { key:'kids',        emoji:'🧒', label:'Kids Hibachi',  sub:'11 and under only · Fried rice +$2.95' },
      { key:'appetizer',   emoji:'🥟', label:'Appetizer',     sub:'' },
      { key:'dinner',      emoji:'🔥', label:'Hibachi Dinner',sub:'All dinners include soup, salad, vegetables, and steamed rice (fried rice +$3.95 | Japanese noodles +$4.95)' },
      { key:'addon',       emoji:'➕', label:'Add On',        sub:'' },
      { key:'combo',       emoji:'🍱', label:'Combo Dinner',  sub:'' },
      { key:'chefspecial', emoji:'👨‍🍳', label:'Chef Special',sub:'' },
    ],
    sushiKitchen: [
      { key:'soupsalad',    emoji:'🥣', label:'Soup & Salad',       sub:'' },
      { key:'appetizer',    emoji:'🥟', label:'Appetizer',          sub:'' },
      { key:'tempura',      emoji:'🍤', label:'Tempura',            sub:'Served with steamed rice and soup · Soup not available for takeout' },
      { key:'bento',        emoji:'🍱', label:'Bento Box',          sub:'Served with soup, salad, 2 cali roll, veg tempura or hibachi veg · Soup not available for takeout' },
      { key:'udonrice',     emoji:'🍲', label:'Udon & Fried Rice',  sub:'' },
      { key:'rollmaki',      emoji:'🍣', label:'Roll & Maki',         sub:'' },
      { key:'rolls',        emoji:'🍣', label:'Fuji Ya Special Rolls', sub:'All "krab" refers to imitation crab' },
      { key:'sushispecial', emoji:'🍣', label:'Sushi Special',      sub:'Served with soup & salad · Soup not available for takeout' },
      { key:'buildyourown', emoji:'🍱', label:'Create Your Own Roll', sub:'' },
    ],
  };

  items.forEach((item, idx) => {
    if (item.subcat) {
      const prevItem = items[idx - 1];
      const prevSubcat = prevItem ? prevItem.subcat : null;
      if (item.subcat !== prevSubcat) {
        let secLabel = item.subcat;
        let secEmoji = null;
        let secSub = null;
        const _fbSecs = (window._firebaseSections && window._firebaseSections[tab])
          || JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab]
          || null;
        const secList = _fbSecs || DEFAULT_SEC_CONFIG[tab] || [];
        const accSec = secList.find(s => s.key === item.subcat);
        if (accSec) { secLabel = accSec.label; secEmoji = accSec.emoji; secSub = accSec.sub; }

        const h = document.createElement('div');
        h.className = 'menu-section-header';
        h.textContent = (secEmoji ? secEmoji + ' ' : '') + secLabel;
        if (secSub) {
          const sub = document.createElement('div');
          sub.style.cssText = 'font-size:11px;color:var(--muted);font-weight:400;margin-top:2px;';
          sub.textContent = secSub;
          h.appendChild(sub);
        }
        list.appendChild(h);
      }
    }

    const inCart = cart.filter(c => c.name === item.n || c.name.startsWith(item.n + ' — ') || c.name.startsWith(item.n + ' (')).length;
    const isSoldOut = item.soldOut === true;
    const div = document.createElement('div');
    if (isSoldOut) div.style.opacity = '0.55';

    const thumbHtml = item.img
      ? `<img class="mi-thumb" src="${item.img}" alt="${item.n}" onerror="this.style.display='none'" onclick="openImgModal(this.src,'${item.n.replace(/'/g,"\\'")}')" style="cursor:zoom-in;">`
      : (item.e ? '<div class="mi-emoji">' + item.e + '</div>' : '');

    const priceDisplay = isSoldOut
      ? 'SOLD OUT'
      : item.p === 0
        ? 'Market Price'
        : item.options
          ? 'from $' + Math.min(...item.options.map(o => o.p)).toFixed(2)
          : '$' + parseFloat(item.p).toFixed(2);

    const optionsHtml = item.options ? `
      <div class="mi-options" style="display:none;">
        ${item.options.map(opt =>
          `<div class="mi-opt-row" data-name="${item.n} — ${opt.n}" data-price="${opt.p}" data-emoji="${item.e}">
            <span class="mi-opt-name">${opt.n}</span>
            <span class="mi-opt-price">$${opt.p.toFixed(2)}</span>
            <button class="mi-opt-btn">+</button>
          </div>`
        ).join('')}
      </div>` : '';

    div.innerHTML =
      '<div class="mi-main">' +
        thumbHtml +
        '<div class="mi-info">' +
          '<div class="mi-name">' + item.n + '</div>' +
          '<div class="mi-desc">' + (item.d || '') + '</div>' +
          (isSoldOut ? '<div style="font-size:12px;font-weight:700;color:#e74c3c;letter-spacing:0.05em;">SOLD OUT</div>' : '<div class="mi-price">' + priceDisplay + '</div>') +
        '</div>' +
        (isSoldOut
          ? '<button class="mi-add" disabled style="opacity:0.3;cursor:not-allowed;pointer-events:none;">✕</button>'
          : item.options
          ? '<button class="mi-expand-btn">▾</button>'
          : (item.multiSelect || (item.toppings && item.toppings.length))
            ? (inCart
                ? '<button class="mi-add" style="position:relative;">+<span style="position:absolute;top:-6px;right:-6px;background:var(--gold);color:var(--ink);border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;line-height:1;">' + inCart + '</span></button>'
                : '<button class="mi-add">+</button>')
            : (inCart
                ? '<div class="mi-qty-ctrl" style="flex-shrink:0;display:flex;align-items:center;gap:6px;border:1px solid var(--border);border-radius:20px;padding:4px 8px;">' +
                    '<button class="mi-qty-minus" style="width:20px;height:20px;border:none;background:none;font-size:15px;color:var(--ink);cursor:pointer;line-height:1;">−</button>' +
                    '<span class="mi-qty-num" style="font-size:12px;font-weight:600;min-width:12px;text-align:center;">' + inCart + '</span>' +
                    '<button class="mi-qty-plus" style="width:20px;height:20px;border:none;background:none;font-size:15px;color:var(--ink);cursor:pointer;line-height:1;">+</button>' +
                  '</div>'
                : '<button class="mi-add">+</button>')
        ) +
      '</div>' +
      optionsHtml;

    if (!isSoldOut) {
      if (item.toppings && item.toppings.length && !item.options) {
        const addBtn = div.querySelector('.mi-add');
        if (addBtn) addBtn.addEventListener('click', () => openToppingModal(item));
      } else if (item.multiSelect) {
        const addBtn = div.querySelector('.mi-add');
        if (addBtn) addBtn.addEventListener('click', () => openMultiSelectModal(item));
      } else if (item.options) {
        const expandBtn = div.querySelector('.mi-expand-btn');
        if (expandBtn) expandBtn.addEventListener('click', function() {
          const opts = div.querySelector('.mi-options');
          const isOpen = opts.style.display === 'block';
          opts.style.display = isOpen ? 'none' : 'block';
          this.textContent = isOpen ? '▾' : '▴';
          this.classList.toggle('active', !isOpen);
        });
        div.querySelectorAll('.mi-opt-row').forEach(row => {
          row.querySelector('.mi-opt-btn').addEventListener('click', function() {
            if (item.toppings && item.toppings.length) {
              const optItem = { ...item, n: row.dataset.name, p: parseFloat(row.dataset.price), e: row.dataset.emoji };
              openToppingModal(optItem);
            } else {
              addToCart(row.dataset.name, parseFloat(row.dataset.price), row.dataset.emoji, null);
              this.textContent = '✓'; this.classList.add('added');
              setTimeout(() => { this.textContent = '+'; this.classList.remove('added'); }, 800);
              updateCartBar();
            }
          });
        });
      } else {
        const qtyCtrl = div.querySelector('.mi-qty-ctrl');
        if (qtyCtrl) {
          const minusBtn = qtyCtrl.querySelector('.mi-qty-minus');
          const plusBtn  = qtyCtrl.querySelector('.mi-qty-plus');
          const activeTab = document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'chineseDinner';
          minusBtn.addEventListener('click', () => { cartQty(item.n, -1); buildMenu(activeTab); });
          plusBtn.addEventListener('click', () => { cartQty(item.n, 1); buildMenu(activeTab); });
        } else {
          const addBtn = div.querySelector('.mi-add');
          if (addBtn) {
            addBtn.addEventListener('click', () => {
              addToCart(item.n, parseFloat(item.p), item.e, null);
              updateCartBar();
              buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'chineseDinner');
            });
          }
        }
      }
    }
    list.appendChild(div);
  });
}

function updateCartBar() {
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
}

function isLunchHours() {
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins < 15 * 60; // Every day, 12:01 AM – 3:00 PM
}

function isLunchTab(tab) {
  return tab === 'lunch';
}

// Guest-facing tabs now follow the same category order/labels the admin sets
// in Menu Manager → Categories, kept in sync via Firebase.
window.buildGuestMenuTabs = function(cats) {
  const container = document.getElementById('menu-tabs-container');
  if (!container || !cats || !cats.length) return;
  const activeBefore = document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
  container.innerHTML = cats.map((cat, i) => {
    const isActive = activeBefore ? (cat.key === activeBefore) : (i === 0);
    return `<div class="menu-tab${isActive ? ' active' : ''}" onclick="switchTab(this,'${cat.key}')">${cat.emoji || ''} ${cat.label || cat.name || cat.key}</div>`;
  }).join('');
};

async function syncGuestMenuTabs() {
  // Instant render from cache (avoids a flash of stale tab order on repeat visits)
  try {
    const cached = JSON.parse(localStorage.getItem('prb_menu_categories') || 'null');
    if (cached && cached.length) window.buildGuestMenuTabs(cached);
  } catch(e) {}

  // Then refresh from Firebase — this is what makes admin reordering show up
  // on the guest app automatically, without needing a code change.
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadCategoriesFromFirebase } = await import(fbUrl);
    const fresh = await loadCategoriesFromFirebase();
    if (fresh && fresh.length) {
      localStorage.setItem('prb_menu_categories', JSON.stringify(fresh));
      window.buildGuestMenuTabs(fresh);
    }
  } catch(e) { console.warn('Guest menu tabs sync error:', e); }
}

function switchTab(el, tab) {
  if (isLunchTab(tab) && !isLunchHours()) { showLunchClosedPopup(); return; }
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
  const notice = document.getElementById('lunch-notice');
  if (notice) notice.style.display = isLunchTab(tab) ? 'block' : 'none';
}

function openImgModal(src, name) {
  let modal = document.getElementById('img-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'img-modal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:20px;';
    modal.onclick = () => { modal.style.display = 'none'; };
    modal.innerHTML = `
      <div style="position:relative;max-width:360px;width:100%;" onclick="event.stopPropagation()">
        <img id="img-modal-img" src="" style="width:100%;border-radius:16px;display:block;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div id="img-modal-name" style="text-align:center;color:#fff;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;margin-top:12px;"></div>
        <button onclick="document.getElementById('img-modal').style.display='none'"
          style="position:absolute;top:-12px;right:-12px;width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);">✕</button>
      </div>`;
    document.body.appendChild(modal);
  }
  document.getElementById('img-modal-img').src = src;
  document.getElementById('img-modal-name').textContent = name;
  modal.style.display = 'flex';
}

function showLunchClosedPopup() {
  const msg = 'Lunch is served daily until 3:00 PM.\n\nPlease check back tomorrow morning, or order from our Dinner menu now!';
  document.getElementById('lunch-closed-msg').textContent = msg;
  const popup = document.getElementById('lunch-closed-popup');
  if (popup) popup.style.display = 'flex';
}


function addToCart(name, price, emoji, btn) {
  cart.push({ name, price, emoji });
  if (btn) {
    const count = cart.filter(c => c.name === name).length;
    btn.classList.add('added');
    btn.textContent = '✓ ' + count;
  }
  updateCartBar();
}

function prefillReservationForm() {
  const user    = getUser();
  const profile = loadProfile();
  const userFullName = user ? [user.firstName, user.lastName].filter(s => s && s !== 'undefined').join(' ').trim() : '';
  const profileFullName = [profile?.firstName, profile?.lastName].filter(s => s && s !== 'undefined').join(' ').trim();
  const name = userFullName || profileFullName || '';
  const phone   = user?.phone || profile.phone || '';
  const email   = user?.email || profile.email || '';
  const nameEl  = document.getElementById('res-name');
  const phoneEl = document.getElementById('res-phone');
  const emailEl = document.getElementById('res-email');
  if (nameEl && !nameEl.value)   nameEl.value  = name;
  if (phoneEl && !phoneEl.value) phoneEl.value = phone;
  if (emailEl && !emailEl.value) emailEl.value = email;
}

// ─────────────────────────────────
// PROFILE
// ─────────────────────────────────
const PROFILE_KEY = 'prb_profile';

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; }
  catch(e) { return {}; }
}

function saveProfile() {
  const user = getUser();
  const firstNameVal = document.getElementById('pf-firstname').value.trim();
  if (!firstNameVal || !/[a-zA-Z]/.test(firstNameVal)) {
    alert('Please enter your first name.');
    document.getElementById('pf-firstname')?.focus();
    return;
  }
  const profile = {
    firstName: firstNameVal,
    lastName:  document.getElementById('pf-lastname').value.trim(),
    email:     document.getElementById('pf-email').value.trim() || user?.email || '',
    phone:     document.getElementById('pf-phone').value.trim(),
    address:   document.getElementById('pf-address').value.trim(),
    city:      document.getElementById('pf-city').value.trim(),
    state:     document.getElementById('pf-state').value.trim(),
    zip:       document.getElementById('pf-zip').value.trim(),
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  const updated = { ...(user || {}), ...profile };
  localStorage.setItem('prb_user', JSON.stringify(updated));
  updateProfileUI();
  updateAuthUI();
  showToastMsg('✅ Profile saved!');
  const fbUrl = window.location.origin + '/js/firebase-menu.js';
  import(fbUrl).then(({ saveProfileToFirebase, savePointsToFirebase }) => {
    saveProfileToFirebase(profile).then(ok => {
      if (ok) showToastMsg('✅ Profile saved & synced!');
    }).catch(() => {});
    const u = getUser();
    if (u?.email) {
      savePointsToFirebase(u.email, u.points || 0, u.pointsLog || [], u.tierPoints || 0).catch(() => {});
    }
  }).catch(() => {});
}

function updateProfileUI() {
  const user    = getUser();
  const profile = loadProfile();
  const data = {
    firstName: profile.firstName || user?.firstName || '',
    lastName:  profile.lastName  || user?.lastName  || '',
    email:     profile.email     || user?.email     || '',
    phone:     profile.phone     || user?.phone     || '',
    address:   profile.address   || '',
    city:      profile.city      || '',
    state:     profile.state     || '',
    zip:       profile.zip       || '',
  };
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  set('pf-firstname', data.firstName); set('pf-lastname',  data.lastName);
  set('pf-email',     data.email);     set('pf-phone',     data.phone);
  set('pf-address',   data.address);   set('pf-city',      data.city);
  set('pf-state',     data.state);     set('pf-zip',       data.zip);
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl   = document.getElementById('profile-name-display');
  const emailEl  = document.getElementById('profile-email-display');
  if (avatarEl) avatarEl.textContent = fullName ? fullName.slice(0,1).toUpperCase() : '👤';
  if (nameEl)   nameEl.textContent   = fullName || 'Guest';
  if (emailEl)  emailEl.textContent  = data.email || 'Not signed in';
}

function signOutAndClear() {
  localStorage.removeItem('prb_user');
  updateAuthUI();
  goTo('home');
  showToastMsg('Signed out');
}

function showToastMsg(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--gold);padding:10px 20px;border-radius:20px;font-size:13px;z-index:9999;transition:opacity 0.3s;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ─────────────────────────────────
// PICKUP TIME
// ─────────────────────────────────
const PICKUP_KEY = 'prb_pickup_settings';
let selectedPickupTime = null;

function getPickupSettings() {
  try { return JSON.parse(localStorage.getItem(PICKUP_KEY)) || { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
  catch(e) { return { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
}

function buildPickupSlots() {
  const container = document.getElementById('pickup-time-slots');
  if (!container) return;
  container.innerHTML = '';
  const s = getPickupSettings();
  const now = new Date();
  const prepMs = s.prepTime * 60 * 1000;
  const earliest = new Date(now.getTime() + prepMs);
  earliest.setMinutes(Math.ceil(earliest.getMinutes() / 15) * 15, 0, 0);

  // Store's actual closing time (from Admin > Pickup Settings), converted to
  // "minutes since midnight" for comparison. ASAP used to be offered
  // unconditionally regardless of the clock — a guest could place an ASAP
  // order minutes (or hours) after closing. Scheduled time slots already
  // respected closing time; ASAP now does too.
  const [closeH, closeM] = (s.close || '21:00').split(':').map(Number);
  const closeMins = closeH * 60 + closeM;
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const pastClosing = nowMins >= closeMins;

  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:relative;';
  const select = document.createElement('select');
  select.id = 'pickup-time-select';
  select.className = 'form-input';
  select.style.cssText = 'width:100%;appearance:none;-webkit-appearance:none;padding-right:36px;cursor:pointer;';

  if (!pastClosing) {
    const asapOpt = document.createElement('option');
    asapOpt.value = 'ASAP (~' + s.prepTime + ' min)';
    asapOpt.textContent = '⚡ ASAP (~' + s.prepTime + ' min)';
    select.appendChild(asapOpt);
    selectedPickupTime = { label: asapOpt.value };
  } else {
    selectedPickupTime = null;
  }

  if (s.allowSchedule !== false) {
    const windows = [
      { open: 11 * 60 + 30, close: 14 * 60 },
      { open: 17 * 60,      close: 21 * 60 + 15 },
    ];
    const isMorning  = nowMins < 11 * 60;
    const isBreakTime = nowMins >= 14 * 60 && nowMins < 17 * 60;
    if (isBreakTime || pastClosing) {
      if (select.options.length === 0) {
        const noAsap = document.createElement('option');
        noAsap.value = ''; noAsap.textContent = '🕐 Select pickup time';
        noAsap.disabled = true; noAsap.selected = true;
        select.appendChild(noAsap);
      }
    }
    let t;
    if (isMorning) {
      t = (() => { const d = new Date(now); d.setHours(11, 30, 0, 0); return d; })();
    } else if (isBreakTime) {
      t = (() => { const d = new Date(now); d.setHours(17, 0, 0, 0); return d; })();
    } else {
      t = new Date(earliest.getTime() + 15 * 60 * 1000);
    }
    while (true) {
      const totalMins = t.getHours() * 60 + t.getMinutes();
      const inWindow = windows.some(w => totalMins >= w.open && totalMins <= w.close);
      if (inWindow) {
        const opt = document.createElement('option');
        const tEnd = new Date(t.getTime() + 15 * 60 * 1000);
        const labelStart = t.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        const labelEnd   = tEnd.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        opt.value = labelStart + ' – ' + labelEnd;
        opt.textContent = '🕐 ' + labelStart + ' – ' + labelEnd;
        select.appendChild(opt);
      }
      t = new Date(t.getTime() + 15 * 60 * 1000);
      if (t.getHours() >= 22) break;
    }
  }

  // If closing time has passed and no scheduled slots remain either, the
  // store is genuinely closed for online ordering right now. Disable the
  // picker and block checkout rather than silently defaulting to ASAP.
  const hasRealOption = Array.from(select.options).some(o => o.value !== '');
  if (pastClosing && !hasRealOption) {
    select.innerHTML = '';
    const closedOpt = document.createElement('option');
    closedOpt.value = ''; closedOpt.textContent = '🌙 Closed for online orders';
    closedOpt.disabled = true; closedOpt.selected = true;
    select.appendChild(closedOpt);
    select.disabled = true;
    selectedPickupTime = null;
  }

  select.addEventListener('change', () => { selectedPickupTime = select.value ? { label: select.value } : null; });
  const arrow = document.createElement('div');
  arrow.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--gold);font-size:14px;';
  arrow.textContent = '▾';
  wrap.appendChild(select); wrap.appendChild(arrow);
  container.appendChild(wrap);
}

// ─────────────────────────────────
// RESERVATION
// ─────────────────────────────────
let _blackoutDates = null;

async function loadBlackoutDates() {
  if (_blackoutDates && _blackoutDates.length > 0) return _blackoutDates;
  try {
    const { db } = await import('/js/firebase-menu.js');
    const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const snap = await getDocs(collection(db, 'blackout_dates'));
    console.log('🔥 blackout snap size:', snap.size);
    _blackoutDates = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    console.log('🔥 blackout loaded:', _blackoutDates.length);
  } catch(e) {
    console.error('blackout load error:', e);
    _blackoutDates = [];
  }
  return _blackoutDates;
}

function isDateBlackedOut(date, blackouts) {
  const dow = date.getDay();
  const dateStr = date.toLocaleDateString('en-CA');
  return blackouts.some(b => {
    if (b.type === 'date' && b.date === dateStr && !b.startTime) return true;
    if (b.type === 'recurring' && parseInt(b.dow) === dow && !b.startTime) return true;
    return false;
  });
}

function isTimeBlackedOut(date, slot, blackouts) {
  const dow = date.getDay();
  const dateStr = date.toLocaleDateString('en-CA');
  const slotMins = slot.h * 60 + slot.m;
  return blackouts.some(b => {
    if (!b.startTime) return false;
    const startMins = parseInt(b.startTime.split(':')[0]) * 60 + parseInt(b.startTime.split(':')[1]);
    const endMins = parseInt(b.endTime.split(':')[0]) * 60 + parseInt(b.endTime.split(':')[1]);
    if (slotMins < startMins || slotMins >= endMins) return false;
    if (b.type === 'date' && b.date === dateStr) return true;
    if (b.type === 'recurring' && parseInt(b.dow) === dow) return true;
    return false;
  });
}

function selectCuisineChoice(el) {
  document.querySelectorAll('.cuisine-choice-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}

async function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const blackouts = await loadBlackoutDates();
  const today = new Date();
  let firstAvailable = true;
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const isBlocked = isDateBlackedOut(d, blackouts);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (!isBlocked && firstAvailable ? ' selected' : '');
    if (isBlocked) cell.className += ' blacked-out';
    cell.dataset.date = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
    cell.innerHTML =
      '<div class="dc-day">' + d.toLocaleDateString('en-US',{weekday:'short'}) + '</div>' +
      '<div class="dc-num">' + d.getDate() + '</div>' +
      '<div class="dc-mon">' + d.toLocaleDateString('en-US',{month:'short'}) + '</div>' +
      (isBlocked ? '<div style="font-size:9px;color:#e74c3c;margin-top:2px;">Unavailable</div>' : '');
    if (!isBlocked) {
      if (firstAvailable) firstAvailable = false;
      cell.addEventListener('click', function() {
        document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        buildTimeSlots();
      });
    } else {
      cell.style.cssText += 'opacity:0.4;cursor:not-allowed;';
    }
    grid.appendChild(cell);
  }
  buildTimeSlots();
}

async function buildTimeSlots() {
  const grid = document.getElementById('time-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const blackouts = await loadBlackoutDates();
  const selectedDateEl = document.querySelector('.date-cell.selected');
  const rawDate = selectedDateEl ? new Date(selectedDateEl.dataset.date) : new Date();
  const selectedDate = new Date(rawDate.getFullYear(), rawDate.getMonth(), rawDate.getDate());
  const dow = selectedDate.getDay(); // 0=Sun ... 6=Sat

  // Start time: Sat & Sun → 12:00 PM · Mon–Fri → 11:00 AM
  const isWeekendStart = (dow === 0 || dow === 6);
  const startH = isWeekendStart ? 12 : 11;
  const startM = 0;

  // Last reservation: Fri & Sat → 10:30 PM · Sun–Thu → 9:30 PM
  const isLateNight = (dow === 5 || dow === 6);
  const endH = isLateNight ? 22 : 21;
  const endM = 30;

  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  const slots = [];
  for (let mins = startMinutes; mins <= endMinutes; mins += 30) {
    slots.push({ h: Math.floor(mins / 60), m: mins % 60 });
  }

  const now = new Date();
  const isToday = selectedDate.toDateString() === now.toDateString();
  const nowMins = now.getHours() * 60 + now.getMinutes() + 60; // 1 hour lead time

  let firstChip = true;
  slots.forEach(slot => {
    const isBlocked = isTimeBlackedOut(selectedDate, slot, blackouts);
    const slotMins = slot.h * 60 + slot.m;
    const isPast = isToday && slotMins < nowMins;
    const d = new Date();
    d.setHours(slot.h, slot.m);
    const label = d.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
    const chip = document.createElement('div');
    chip.className = 'time-chip' + (!isBlocked && !isPast && firstChip ? ' selected' : '');
    if (isBlocked) chip.className += ' blacked-out';
    if (isPast) chip.className += ' unavailable';
    chip.textContent = label + (isBlocked ? ' 🚫' : '');
    if (!isBlocked && !isPast) {
      if (firstChip) firstChip = false;
      chip.addEventListener('click', function() {
        document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
      });
    } else {
      chip.style.cssText = 'opacity:0.4;cursor:not-allowed;text-decoration:line-through;';
    }
    grid.appendChild(chip);
  });
}

async function confirmReservation() {
  if (!serviceStatus.reservations) { alert('Reservations are temporarily paused. Please call us at (770) 270-1188 to book a table.'); return; }
  // Prevent double submission
  const btn = document.getElementById('confirm-res-btn');
  if (btn) {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.textContent = 'Processing...';
    btn.style.opacity = '0.6';
  }
  const user    = getUser();
  const profile = loadProfile();
  const dateEl  = document.querySelector('.date-cell.selected');
  const timeEl  = document.querySelector('.time-chip.selected');
  const guests  = document.getElementById('guest-count')?.textContent || '2';
  const cuisineEl = document.querySelector('.cuisine-choice-btn.selected');
  const cuisine = cuisineEl ? cuisineEl.dataset.cuisine : 'Chinese';
  const special = document.getElementById('res-special')?.value || '';
  const userFullName = user ? [user.firstName, user.lastName].filter(s => s && s !== 'undefined').join(' ').trim() : '';
  const profileFullName = [profile?.firstName, profile?.lastName].filter(s => s && s !== 'undefined').join(' ').trim();
  const resNameInput = document.getElementById('res-name')?.value.trim() || '';
  const resName = resNameInput || userFullName || profileFullName || '';
  const resPhone = document.getElementById('res-phone')?.value.trim() || '';
  const resEmail = document.getElementById('res-email')?.value.trim() || '';
  if (!resName) { alert('Please enter your name.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  if (!resPhone || resPhone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  if (!resEmail || !resEmail.includes('@')) { alert('Please enter a valid email address.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  const reservation = {
    id: Date.now().toString(),
    date: dateEl ? dateEl.dataset.date || dateEl.textContent.trim() : new Date().toLocaleDateString(),
    time: timeEl ? timeEl.textContent.trim() : '6:00 PM',
    guests: parseInt(guests),
    cuisine, special, name: resName, phone: resPhone, email: resEmail,
    status: 'confirmed', createdAt: Date.now(),
  };
  try {
    const existing = JSON.parse(localStorage.getItem('prb_reservations') || '[]');
    existing.unshift(reservation);
    localStorage.setItem('prb_reservations', JSON.stringify(existing));
  } catch(e) {}
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ saveReservationToFirebase }) => {
      saveReservationToFirebase(reservation).catch(e => console.warn('Reservation save failed:', e));
    });
  } catch(e) {}
  fetch('/api/notify-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderItems: [{ name: 'Table for ' + reservation.guests + ' guests', price: 0, emoji: '🗓️' }],
      subtotal: 0, tax: 0, tip: 0, total: 0,
      customer: { name: reservation.name, email: reservation.email, phone: reservation.phone },
      orderId: reservation.id,
      pickupTime: reservation.date + ' at ' + reservation.time,
      isReservation: true, special: '[' + reservation.cuisine + '] ' + reservation.special,
      notifEmails: getNotifEmails(), notifPhones: getNotifPhones(),
      guestSmsConsent: document.getElementById('sms-consent-res')?.checked || false,
    }),
  }).then(r => r.json()).then(d => console.log('Reservation notification sent:', d)).catch(e => console.warn(e));
  showSuccess('reservation');
}

function buildMyReservations() {
  const el = document.getElementById('my-reservations-list');
  if (!el) return;
  let reservations = [];
  try { reservations = JSON.parse(localStorage.getItem('prb_reservations') || '[]'); } catch(e) {}
  if (!reservations.length) {
    el.innerHTML = '<div style="font-size:13px;color:var(--muted);padding:12px 0;text-align:center;">No reservations yet.</div>';
    return;
  }
  el.innerHTML = reservations.map(r => {
    const isUpcoming = new Date(r.createdAt) >= (Date.now() - 86400000 * 1);
    return `<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:14px;font-weight:600;">${r.date}</div>
          <div style="font-size:13px;color:var(--gold);margin-top:2px;">${r.time} · ${r.guests} guests${r.cuisine ? ' · ' + r.cuisine : ''}</div>
        </div>
        <div style="font-size:11px;padding:4px 10px;border-radius:20px;background:${isUpcoming ? 'rgba(200,169,110,0.12)' : 'var(--bone)'};color:${isUpcoming ? 'var(--gold)' : 'var(--muted)'};">
          ${isUpcoming ? '✦ Upcoming' : 'Past'}
        </div>
      </div>
      ${r.special ? `<div style="font-size:12px;color:var(--muted);">📝 ${r.special}</div>` : ''}
    </div>`;
  }).join('');
}

function changeGuests(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  const el = document.getElementById('guest-count');
  if (el) el.textContent = guestCount;
}

function selectTime(el) {
  document.querySelectorAll('.time-chip').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

// ─────────────────────────────────
// TIP
// ─────────────────────────────────
function selectTip(el, pct) {
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const customWrap = document.getElementById('tip-custom-wrap');
  if (el.id === 'tip-custom-btn') {
    tipPercent = 0; tipCustom = 0;
    if (customWrap) customWrap.style.display = 'flex';
    const inp = document.getElementById('tip-custom-input');
    if (inp) { inp.value = ''; inp.focus(); }
  } else if (el.id === 'tip-no-btn') {
    tipPercent = 0; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
  } else {
    tipPercent = pct; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
  }
  buildCheckoutSummary();
}

function setCustomTip(val) { tipCustom = parseFloat(val) || 0; buildCheckoutSummary(); }
function getTipAmount(subtotal) { if (tipCustom !== null) return tipCustom; return subtotal * (tipPercent / 100); }

function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const needed = 500;
  if (!usePoints && pts < needed) { showToastMsg('⚠️ You need 500 pts ($5) minimum to use points'); return; }
  usePoints = !usePoints;
  const t = document.getElementById('pt-toggle');
  if (t) t.classList.toggle('on', usePoints);
  buildCheckoutSummary();
}

// ─────────────────────────────────
// REWARDS
// ─────────────────────────────────
const TIERS = [
  { name:'Bronze',   icon:'🥉', min:0,    max:999,  rate:2, color:'#cd7f32' },
  { name:'Silver',   icon:'🥈', min:1000, max:1999, rate:3, color:'#a8a9ad' },
  { name:'Gold',     icon:'🥇', min:2000, max:2999, rate:4, color:'#c8a96e' },
  { name:'Platinum', icon:'💎', min:3000, max:99999,rate:5, color:'#5c6bc0' },
];

function getNotifEmails() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.emails && s.emails.length) return s.emails;
  } catch(e) {}
  if (window._notifSettings?.emails?.length) return window._notifSettings.emails;
  return ['yshahn@gmail.com', 'ymhahn@gmail.com'];
}
function getNotifPhones() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.phones && s.phones.length) return s.phones;
  } catch(e) {}
  if (window._notifSettings?.phones?.length) return window._notifSettings.phones;
  return ['7705008420', '6788629389'];
}

function getTierPoints(user) { return user?.tierPoints !== undefined ? user.tierPoints : (user?.points || 0); }
function getTier(points) { return TIERS.slice().reverse().find(t => points >= t.min) || TIERS[0]; }
function getEarnRate(user) { const tp = getTierPoints(user); return getTier(tp).rate; }

function checkYearlyReset() {
  return; // Yearly reset disabled — points & tiers are permanent
  const user = getUser();
  if (!user) return;
  const now = new Date();
  const lastReset = user.lastReset ? new Date(user.lastReset) : null;
  const needsReset = !lastReset || lastReset.getFullYear() < now.getFullYear();
  if (needsReset) {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(async ({ loadPointsFromFirebase, savePointsToFirebase }) => {
      // Merge with Firebase's latest state first — protects against overwriting
      // history (e.g. a signup bonus) with a stale/incomplete local user object.
      let basePoints = user.points || 0;
      let baseLog    = user.pointsLog || [];
      let baseTier   = user.tierPoints || 0;
      try {
        if (user.email) {
          const fbPts = await loadPointsFromFirebase(user.email);
          if (fbPts) {
            basePoints = fbPts.points ?? basePoints;
            baseLog    = (fbPts.pointsLog && fbPts.pointsLog.length >= baseLog.length) ? fbPts.pointsLog : baseLog;
            baseTier   = fbPts.tierPoints ?? baseTier;
          }
        }
      } catch(e) {
        console.warn('checkYearlyReset: could not load Firebase points, using local state:', e);
      }

      const prevTier = getTier(baseTier).name;
      const newLog = [...baseLog, {
        desc: 'Annual Tier Reset (was ' + prevTier + ') \u2192 Bronze',
        pts: 0,
        date: Date.now()
      }];

      user.points     = basePoints;
      user.tierPoints = 0;
      user.pointsLog  = newLog;
      user.lastReset  = now.toISOString();
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      savePointsToFirebase(user.email, basePoints, newLog, 0).catch(() => {});
    }).catch(() => {});
  }
}

function buildRewardsScreen() {
  checkYearlyReset();
  const user = getUser();
  const points = user ? (user.points || 0) : 0;
  const tierPts = user?.tierPoints !== undefined ? user.tierPoints : points;
  const tier = getTier(tierPts);
  const nextTier = TIERS.find(t => t.min > tierPts);
  const rhPoints    = document.getElementById('rh-points');
  const rhSub       = document.getElementById('rh-sub');
  const rhCashValue = document.getElementById('rh-cash-value');
  if (rhPoints)    rhPoints.textContent    = points.toLocaleString();
  if (rhSub)       rhSub.textContent       = user ? tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate' : 'Sign in to view your points';
  if (rhCashValue) rhCashValue.textContent = '$' + (points / 100).toFixed(2);
  const tiersEl = document.getElementById('rewards-tiers');
  if (tiersEl) {
    tiersEl.innerHTML = TIERS.map(t => {
      const isActive = getTier(tierPts).name === t.name;
      const pct = t.name === 'Platinum' ? 100 : Math.min(100, ((tierPts - t.min) / (t.max - t.min + 1)) * 100);
      return '<div style="background:' + (isActive ? 'var(--ink)' : 'var(--card-bg)') + ';border:1px solid ' + (isActive ? 'var(--gold)' : 'var(--border)') + ';border-radius:12px;padding:14px 16px;margin-bottom:8px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:' + (isActive ? '8' : '0') + 'px;">' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="font-size:20px;">' + t.icon + '</div>' +
            '<div><div style="font-size:13px;font-weight:600;color:' + (isActive ? '#fff' : 'var(--ink)') + ';">' + t.name + '</div>' +
            '<div style="font-size:11px;color:' + (isActive ? 'rgba(255,255,255,0.6)' : 'var(--muted)') + ';">' + (t.min === 0 ? '0' : t.min.toLocaleString()) + (t.name === 'Platinum' ? '+' : '–' + t.max.toLocaleString()) + ' pts</div></div>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:var(--gold);">' + t.rate + '%</div>' +
        '</div>' +
        (isActive && nextTier ? '<div style="background:rgba(255,255,255,0.1);border-radius:4px;height:4px;overflow:hidden;"><div style="width:' + pct + '%;height:100%;background:var(--gold);border-radius:4px;"></div></div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:4px;">' + (nextTier.min - tierPts) + ' pts to ' + nextTier.name + '</div>' : '') +
      '</div>';
    }).join('');
  }
const resetEl = document.getElementById('rewards-reset');
  if (resetEl) resetEl.style.display = 'none';
  const history = document.getElementById('points-history');
  if (history && user) {
    const log = user.pointsLog || [];
    if (!log.length) {
      history.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">No activity yet. Place an order to earn points!</div>';
    } else {
      history.innerHTML = log.slice().reverse().map(entry =>
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border);">' +
          '<div><div style="font-size:13px;font-weight:500;">' + entry.desc + '</div>' +
          '<div style="font-size:11px;color:var(--muted);">' + new Date(entry.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) + '</div></div>' +
          '<div style="font-size:15px;font-weight:600;color:' + (entry.pts > 0 ? 'var(--gold)' : '#c0392b') + ';">' + (entry.pts > 0 ? '+' : '') + entry.pts + ' pts</div>' +
        '</div>'
      ).join('');
    }
  }
}

function rateStar(n) { document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('lit', i < n)); }
function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────
// STRIPE PAYMENT
// ─────────────────────────────────
async function startStripeCheckout() {
  if (!serviceStatus.orders) { alert('Online ordering is temporarily paused. Please call us at (770) 270-1188 to place an order.'); return; }
  if (cart.length === 0) { alert('Your cart is empty.'); return; }
  if (orderType === 'delivery') {
    if (!serviceStatus.delivery) { alert('🛵 Delivery is temporarily paused. Please choose Pickup, or call us at (770) 270-1188.'); return; }
    if (!deliveryAddressVerified || selectedDeliveryFee === null) {
      alert('Please enter your delivery address and tap "Check Delivery Availability" first.');
      document.getElementById('delivery-address')?.focus();
      return;
    }
    if (!selectedDeliveryTimeLabel) {
      alert('Please select a delivery time.');
      return;
    }
  } else {
    const select = document.getElementById('pickup-time-select');
    if (select && (select.disabled || !select.value)) {
      alert('We are closed for online orders right now. Please check our hours or call us at (770) 270-1188.');
      return;
    }
  }
  const user = getUser();
  if (!user) {
    const firstName = (document.getElementById('gi-firstname') || {}).value.trim();
    const email     = (document.getElementById('gi-email')     || {}).value.trim();
    const phone     = (document.getElementById('gi-phone')     || {}).value.trim();
    if (!firstName || !/[a-zA-Z]/.test(firstName)) { alert('Please enter your first name to continue.'); document.getElementById('gi-firstname')?.focus(); return; }
    if (!email || !email.includes('@')) { alert('Please enter a valid email address to continue.'); document.getElementById('gi-email')?.focus(); return; }
    if (!phone || phone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number to continue.'); document.getElementById('gi-phone')?.focus(); return; }
  }
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) { payBtn.textContent = 'Processing...'; payBtn.disabled = true; }
  const firstName = (document.getElementById('gi-firstname') || {}).value || '';
  const lastName  = (document.getElementById('gi-lastname')  || {}).value || '';
  const email     = (document.getElementById('gi-email')     || {}).value || '';
  const items = cart.map(item => ({ name: item.name, price: item.price, quantity: 1 }));
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = selectedPointsDiscount || 0;
  const deliveryFee = (orderType === 'delivery') ? (selectedDeliveryFee || 0) : 0;
  const total       = Math.max(subtotal + platformFee + tax + tip + deliveryFee - discount, 0.50);
  const deliveryAddress = orderType === 'delivery' ? (document.getElementById('delivery-address')?.value.trim() || '') : '';
  const deliveryDateStr = (orderType === 'delivery' && selectedDeliveryDate)
    ? selectedDeliveryDate.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric' }) : '';
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, customerEmail: email, customerName: (firstName + ' ' + lastName).trim(), usePoints, pointsDiscount: selectedPointsDiscount || 0, tip, deliveryFee }),
    });
    const data = await res.json();
    if (data.url) {
      const smsConsent = document.getElementById('sms-consent')?.checked || false;
      const specialRequest = document.getElementById('checkout-special-request')?.value.trim() || '';
      localStorage.setItem('prb_pending_order', JSON.stringify({
        orderItems: cart.map(i => ({ name: i.name, price: i.price, emoji: i.emoji })),
        subtotal, tax, tip, total,
        orderType,
        pickupTime: orderType === 'delivery' ? (deliveryDateStr + ' ' + selectedDeliveryTimeLabel) : (selectedPickupTime ? selectedPickupTime.label : 'ASAP'),
        deliveryFee, deliveryAddress, deliveryDistance: selectedDeliveryDistance,
        customer: { name: (firstName + ' ' + lastName).trim(), email, phone: (document.getElementById('gi-phone') || {}).value || '' },
        orderId: Date.now().toString().slice(-6),
        smsConsent, specialRequest,
        pointsDiscount: selectedPointsDiscount || 0,
        pickupType: 'instore',
      }));
      window.location.href = data.url;
    } else { throw new Error(data.error || 'Failed to create checkout session'); }
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment error: ' + err.message);
    if (payBtn) { payBtn.textContent = 'Pay $' + total.toFixed(2); payBtn.disabled = false; }
  }
}

function checkPaymentResult() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    cart = [];
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
    const pendingOrder = localStorage.getItem('prb_pending_order');
    if (pendingOrder) {
      // Clear immediately, before any async work starts — closes the race
      // window where a second call to checkPaymentResult() (page reload,
      // back/forward navigation, etc.) could still see the same pending
      // order and re-save/re-notify for it.
      localStorage.removeItem('prb_pending_order');
      try {
        const orderData = JSON.parse(pendingOrder);
        if (orderData.pickupTime) {
          const label = orderData.orderType === 'delivery' ? '🛵 Delivery time' : '🕐 Pickup ready';
          document.getElementById('success-msg').textContent = 'Thank you for your order!\n' + label + ': ' + orderData.pickupTime;
        }
        fetch('/api/notify-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...orderData,
            notifEmails: getNotifEmails(), notifPhones: getNotifPhones(),
            guestSmsConsent: orderData.smsConsent,
            specialRequest: orderData.specialRequest || '',
            pickupType: 'instore',
          }),
        }).then(r => r.json()).then(d => console.log('Notification sent:', d)).catch(e => console.warn('Notify error:', e));

        // Update points using Firebase as the source of truth. localStorage can be
        // lost/reset during the Stripe redirect (especially on mobile), so we
        // re-fetch the latest points from Firebase right before applying this
        // order's earn/redeem, instead of trusting local state blindly.
        const _localUser = getUser();
        const _email = (_localUser && _localUser.email) || (orderData.customer && orderData.customer.email) || '';
        const _subtotal = parseFloat(orderData.subtotal) || 0;

        if (_email) {
          const _fbUrl = window.location.origin + '/js/firebase-menu.js';
          import(_fbUrl).then(async ({ loadPointsFromFirebase, savePointsToFirebase, saveOrderToFirebase }) => {
            let _basePoints = _localUser?.points || 0;
            let _baseTier   = _localUser?.tierPoints || 0;
            let _baseLog    = _localUser?.pointsLog || [];

            try {
              const fbPts = await loadPointsFromFirebase(_email);
              if (fbPts) {
                _basePoints = fbPts.points || 0;
                _baseTier   = fbPts.tierPoints || 0;
                _baseLog    = fbPts.pointsLog || [];
              }
            } catch(e) {
              console.warn('Could not load latest points from Firebase, falling back to local:', e);
            }

            const _earnRate = getEarnRate({ tierPoints: _baseTier });
            const _earned = Math.floor(_subtotal * _earnRate);
            const _used = orderData.pointsDiscount ? Math.round(parseFloat(orderData.pointsDiscount) * 100) : 0;

            const _newPoints = Math.max(0, _basePoints - _used + _earned);
            const _newTier   = _baseTier + _earned;
            const _newLog    = [..._baseLog];
            if (_used > 0) _newLog.push({ desc: 'Points redeemed ($' + parseFloat(orderData.pointsDiscount).toFixed(2) + ' off)', pts: -_used, date: Date.now() });
            if (_earned > 0) _newLog.push({ desc: 'Order #' + (orderData.orderId || ''), pts: _earned, date: Date.now() });

            const _updatedUser = { ...(_localUser || {}), email: _email, points: _newPoints, tierPoints: _newTier, pointsLog: _newLog };
            localStorage.setItem(USER_KEY, JSON.stringify(_updatedUser));

            const _earnedEl = document.getElementById('earned-pts');
            if (_earnedEl) {
              if (_earned > 0 && _used > 0) { _earnedEl.textContent = '+' + _earned + ' pts earned · −' + _used + ' pts used'; }
              else if (_earned > 0) { _earnedEl.textContent = '+' + _earned + ' pts earned'; }
              else { _earnedEl.textContent = '−' + _used + ' pts used'; }
            }
            const _earnedBadge = document.querySelector('.earned-badge');
            if (_earnedBadge) _earnedBadge.style.display = 'block';
            updateAuthUI();

            // saveOrderToFirebase runs ONCE here — it must never be inside the
            // retry loop below. It used to be called on every retry attempt,
            // so if savePointsToFirebase failed and retried (up to 3x), the
            // same order got saved to Firebase up to 3 times.
            saveOrderToFirebase(orderData).catch(() => {});

            const _saveWithRetry = (attempt) => {
              savePointsToFirebase(_email, _newPoints, _newLog, _newTier)
                .then(ok => { if (!ok && attempt < 3) setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt); })
                .catch(e => { if (attempt < 3) setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt); });
            };
            _saveWithRetry(1);
          }).catch(e => console.warn('Firebase import error:', e));
        } else {
          const _earnedEl = document.getElementById('earned-pts');
          if (_earnedEl) _earnedEl.textContent = 'Sign in to earn points!';
          const _earnedBadge = document.querySelector('.earned-badge');
          if (_earnedBadge) _earnedBadge.style.display = 'block';
          const _fbUrl2 = window.location.origin + '/js/firebase-menu.js';
          import(_fbUrl2).then(({ saveOrderToFirebase }) => {
            saveOrderToFirebase(orderData).catch(e => console.warn('Guest order save failed:', e));
          }).catch(() => {});
        }
        history.replaceState({}, '', '/');
      } catch(e) { console.error('Payment result error:', e); }
    }
  } else if (params.get('payment') === 'cancel') {
    history.replaceState({}, '', '/');
  }
}

function showSuccess(type) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'none';
  const total = cart.reduce((s,i) => s+i.price, 0);
  const tax   = total * 0.08;
  const finalTotal = (total + tax - (usePoints ? 5 : 0)).toFixed(2);
  const configs = {
    reservation: { icon:'🎋', title:'Reservation Confirmed!', msg:'Your table has been reserved.\nA confirmation will be sent to you.', pts:'' },
    payment:     { icon:'✅', title:'Payment Complete!', msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!', pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.', pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent = c.pts;
  const earnedBadge = document.querySelector('.earned-badge');
  if (earnedBadge) earnedBadge.style.display = (type === 'reservation' || !c.pts) ? 'none' : 'block';
  if (type === 'payment') { cart = []; }
}

// ─────────────────────────────────
// TOPPINGS MODAL
// ─────────────────────────────────
let _toppingItem = null;
let _toppingQty  = 1;

function openToppingModal(item) {
  _toppingItem = item;
  document.getElementById('topping-modal-title').textContent = (item.e ? item.e + ' ' : '') + item.n;
  document.getElementById('topping-modal-price').textContent = '$' + parseFloat(item.p).toFixed(2);
  updateToppingConfirmBtn();
  const body = document.getElementById('topping-modal-body');
  body.innerHTML =
    `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
      <input type="radio" name="topping-choice" value="none" checked style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
      <span style="font-size:18px;">🚫</span>
      <span style="flex:1;font-size:14px;font-weight:500;">No Topping</span>
    </label>` +
    item.toppings.map((t, ti) =>
      `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
        <input type="checkbox" data-idx="${ti}" style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
        <span style="font-size:18px;">${t.e || '🧂'}</span>
        <span style="flex:1;font-size:14px;">${t.n}</span>
        <span style="font-size:14px;font-weight:600;color:var(--gold);">${parseFloat(t.p) > 0 ? '+$' + parseFloat(t.p).toFixed(2) : 'Free'}</span>
      </label>`
    ).join('');
  body.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const radio = body.querySelector('input[type="radio"]');
      const anyChecked = [...body.querySelectorAll('input[type="checkbox"]')].some(c => c.checked);
      if (radio) radio.checked = !anyChecked;
      updateToppingConfirmBtn();
    });
  });
  const radio = body.querySelector('input[type="radio"]');
  if (radio) radio.addEventListener('change', () => {
    body.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    updateToppingConfirmBtn();
  });
  document.getElementById('topping-modal').style.display = 'flex';
}

function updateToppingConfirmBtn() {
  const btn = document.getElementById('topping-confirm-btn');
  if (!btn || !_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  const toppingTotal = checks.reduce((sum, chk) => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    return sum + (t ? parseFloat(t.p) || 0 : 0);
  }, 0);
  btn.textContent = `Add to Cart — $${(parseFloat(_toppingItem.p) + toppingTotal).toFixed(2)}`;
}

function closeToppingModal() { document.getElementById('topping-modal').style.display = 'none'; _toppingItem = null; }

function confirmToppingCart() {
  if (!_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  addToCart(_toppingItem.n, parseFloat(_toppingItem.p), _toppingItem.e, null);
  checks.forEach(chk => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    if (t) addToCart(_toppingItem.n + ' + ' + t.n, parseFloat(t.p) || 0, t.e || '🧂', null);
  });
  closeToppingModal();
  updateCartBar();
  buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'chineseDinner');
}

// ─────────────────────────────────
// MULTI-SELECT MODAL
// ─────────────────────────────────
// Parses a Group Selection choice like "Smoked Salmon +$2" into { label, surcharge }.
// Admins write the "+$N" suffix directly in the choice text in the admin panel.
function parseChoiceSurcharge(choiceText) {
  const m = String(choiceText).match(/^(.*?)\s*\+\$(\d+(?:\.\d+)?)\s*$/);
  if (m) return { label: m[1].trim(), surcharge: parseFloat(m[2]) };
  return { label: choiceText, surcharge: 0 };
}

let _msItem = null;
let _msSelections = {};

function openMultiSelectModal(item) {
  _msItem = item;
  _msSelections = {};
  item.multiSelect.forEach((_, i) => _msSelections[i] = []);
  const modal = document.getElementById('ms-modal');
  document.getElementById('ms-modal-title').textContent = (item.e ? item.e + ' ' : '') + item.n;
  const body = document.getElementById('ms-modal-body');
  body.innerHTML = '';
  item.multiSelect.forEach((group, gi) => {
    const section = document.createElement('div');
    section.style.cssText = 'margin-bottom:20px;';
    section.innerHTML = '<div style="font-size:12px;font-weight:600;color:var(--ink);margin-bottom:4px;">' + group.label +
      '<span style="font-size:11px;color:var(--muted);font-weight:400;"> · Choose up to ' + group.max + ' · ' + (group.required ? 'Required' : 'Optional') + '</span></div>';
    group.choices.forEach(choiceRaw => {
      const { label, surcharge } = parseChoiceSurcharge(choiceRaw);
      const btn = document.createElement('button');
      btn.className = 'ms-choice-btn';
      btn.textContent = label + (surcharge > 0 ? ' +$' + surcharge.toFixed(2).replace(/\.00$/, '') : '');
      btn.dataset.group = gi; btn.dataset.choice = choiceRaw;
      btn.addEventListener('click', function() {
        const sel = _msSelections[gi];
        if (this.classList.contains('selected')) {
          this.classList.remove('selected');
          _msSelections[gi] = sel.filter(s => s !== choiceRaw);
        } else {
          if (sel.length >= group.max) {
            if (group.max === 1) {
              body.querySelectorAll('.ms-choice-btn[data-group="' + gi + '"].selected').forEach(b => b.classList.remove('selected'));
              _msSelections[gi] = [];
            } else { return; }
          }
          this.classList.add('selected');
          _msSelections[gi] = [..._msSelections[gi], choiceRaw];
        }
        updateMsAddBtn();
        updateMsPriceDisplay();
      });
      section.appendChild(btn);
    });
    body.appendChild(section);
  });
  updateMsAddBtn();
  updateMsPriceDisplay();
  modal.style.display = 'flex';
}

function getMsTotalSurcharge() {
  if (!_msItem) return 0;
  let total = 0;
  _msItem.multiSelect.forEach((group, gi) => {
    (_msSelections[gi] || []).forEach(choiceRaw => { total += parseChoiceSurcharge(choiceRaw).surcharge; });
  });
  return total;
}

function updateMsPriceDisplay() {
  if (!_msItem) return;
  const total = _msItem.p + getMsTotalSurcharge();
  document.getElementById('ms-modal-price').textContent = '$' + total.toFixed(2);
}

function updateMsAddBtn() {
  const btn = document.getElementById('ms-add-btn');
  const allRequired = _msItem.multiSelect.every((g, i) => !g.required || _msSelections[i].length >= Math.min(g.max, 1));
  btn.disabled = !allRequired;
  btn.style.opacity = allRequired ? '1' : '0.4';
}

function confirmMultiSelect() {
  if (!_msItem) return;
  const parts = _msItem.multiSelect.flatMap((g, i) => _msSelections[i]).filter(Boolean)
    .map(choiceRaw => {
      const { label, surcharge } = parseChoiceSurcharge(choiceRaw);
      return label + (surcharge > 0 ? ' (+$' + surcharge.toFixed(2).replace(/\.00$/, '') + ')' : '');
    });
  const name = _msItem.n + ' (' + parts.join(', ') + ')';
  const finalPrice = _msItem.p + getMsTotalSurcharge();
  addToCart(name, finalPrice, _msItem.e, null);
  closeMultiSelectModal();
  const activeTab = document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'chineseDinner';
  buildMenu(activeTab);
}

function closeMultiSelectModal() { document.getElementById('ms-modal').style.display = 'none'; _msItem = null; }

// ─────────────────────────────────
// OPTIONS POPUP
// ─────────────────────────────────
function openOptionsPopup(item) {
  const popup = document.getElementById('options-popup');
  document.getElementById('options-popup-title').textContent = (item.e ? item.e + ' ' : '') + item.n;
  document.getElementById('options-popup-desc').textContent  = item.d;
  const list = document.getElementById('options-popup-list');
  list.innerHTML = '';
  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = '<span class="option-name">' + opt.n + '</span><span class="option-price">$' + opt.p.toFixed(2) + '</span>';
    btn.addEventListener('click', () => {
      addToCart(item.n + ' — ' + opt.n, opt.p, item.e, null);
      closeOptionsPopup();
      buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'entrees');
    });
    list.appendChild(btn);
  });
  popup.style.display = 'flex';
}

function closeOptionsPopup() { document.getElementById('options-popup').style.display = 'none'; }

// ─────────────────────────────────
// TODAY'S PICKS
// ─────────────────────────────────
const PICKS_KEY = 'lkfy_picks';

function getDefaultPicks() {
  return [
    { name:'Peking Duck (3 Courses)', emoji:'🦆', label:"Chef's Signature", origPrice:95.95, salePrice:null },
    { name:'Walnut Shrimp',           emoji:'🦐', label:'Guest Favorite',   origPrice:27.95, salePrice:null },
  ];
}

function getPromoDisplay(promoType, origPrice, salePrice) {
  const orig = parseFloat(origPrice) || 0;
  const sale = parseFloat(salePrice);
  switch(promoType) {
    case '50off':
      return { badge: '🏷️ 50% Off', priceHtml: (!isNaN(sale) && sale >= 0) ? '<span class="fi-orig-price">$' + orig.toFixed(2) + '</span> <span class="fi-sale-price">$' + sale.toFixed(2) + '</span>' : '$' + orig.toFixed(2) };
    case 'b1g1':
      return { badge: '🎁 Buy 1 Get 1 Free', priceHtml: '$' + orig.toFixed(2) + ' <span style="font-size:11px;color:#27ae60;">(2 for 1)</span>' };
    case 'free':
      return { badge: '🎀 Free Item', priceHtml: '<span class="fi-sale-price">FREE</span>' };
    default:
      return { badge: '🆕 New Item', priceHtml: (!isNaN(sale) && sale >= 0 && sale < orig) ? '<span class="fi-orig-price">$' + orig.toFixed(2) + '</span> <span class="fi-sale-price">$' + sale.toFixed(2) + '</span>' : '$' + orig.toFixed(2) };
  }
}

function handlePickClick(pick) {
  const promoType = pick.promoType || 'new';
  const orig = parseFloat(pick.origPrice) || 0;
  const sale = parseFloat(pick.salePrice);
  const emoji = pick.emoji || '🍽️';

  switch(promoType) {
    case 'new':
      // Add at sale price if available, else original
      addToCart(pick.name, (!isNaN(sale) && sale >= 0 && sale < orig) ? sale : orig, emoji, null);
      goTo('order');
      setTimeout(() => goToCart(), 300);
      break;

    case '50off':
      // Add at sale price (discounted)
      addToCart(pick.name, (!isNaN(sale) && sale >= 0) ? sale : orig, emoji, null);
      goTo('order');
      setTimeout(() => goToCart(), 300);
      break;

    case 'b1g1':
      // Check if already in cart (limit 1 b1g1 set)
      const b1g1InCart = cart.filter(c => c.name === pick.name && c._b1g1).length;
      if (b1g1InCart >= 1) {
        alert('You can only add one Buy 1 Get 1 Free deal per order.');
        return;
      }
      // Add 2 items at price of 1
      cart.push({ name: pick.name, price: orig, emoji, _b1g1: true });
      cart.push({ name: pick.name + ' (Free)', price: 0, emoji, _b1g1: true });
      updateCartBar();
      goTo('order');
      setTimeout(() => goToCart(), 300);
      break;

    case 'free':
      // Check minimum order
      const minOrder = parseFloat(pick.minOrderAmt) || 0;
      const cartSubtotal = cart.reduce((s, c) => s + (c.price || 0), 0);
      if (minOrder > 0 && cartSubtotal < minOrder) {
        alert('Add $' + (minOrder - cartSubtotal).toFixed(2) + ' more to your order to get this free item! (Minimum order: $' + minOrder.toFixed(2) + ')');
        goTo('order');
        return;
      }
      // Add free item
      addToCart(pick.name + ' (Free)', 0, emoji, null);
      goTo('order');
      setTimeout(() => goToCart(), 300);
      break;
  }
}


function getEmojiForItem(name) {
  if (!name) return '🍽️';
  const n = name.toLowerCase();
  if (/sushi|roll|maki|nigiri|sashimi|temaki/.test(n)) return '🍣';
  if (/ramen|udon|soba|noodle|lo.?mein|chow.?mein|pho|jajang/.test(n)) return '🍜';
  if (/rice|fried.?rice|bibimbap/.test(n)) return '🍚';
  if (/dumpling|gyoza|wonton|potsticker|mandu/.test(n)) return '🥟';
  if (/tempura|fry|fried|crispy/.test(n)) return '🍤';
  if (/miso|soup|broth|stew|hot.?pot/.test(n)) return '🍲';
  if (/edamame|soybean/.test(n)) return '🫘';
  if (/salmon|tuna|fish|cod|halibut|tilapia/.test(n)) return '🐟';
  if (/shrimp|prawn|scallop|clam|oyster|crab|lobster|seafood/.test(n)) return '🦐';
  if (/chicken|poultry|hen/.test(n)) return '🍗';
  if (/beef|steak|bulgogi|kalbi|short.?rib|brisket/.test(n)) return '🥩';
  if (/pork|bacon|ham|belly/.test(n)) return '🥓';
  if (/duck|peking/.test(n)) return '🦆';
  if (/lamb|mutton/.test(n)) return '🐑';
  if (/tofu|vegetable|veggie|vegan|vegetarian/.test(n)) return '🥬';
  if (/hibachi|grill|bbq|barbecue|yakitori|satay/.test(n)) return '🔥';
  if (/stir.?fry|saute/.test(n)) return '🥘';
  if (/spring.?roll|egg.?roll|lumpia/.test(n)) return '🌯';
  if (/salad/.test(n)) return '🥗';
  if (/wings|wing/.test(n)) return '🍗';
  if (/soup/.test(n)) return '🥣';
  if (/tea|green.?tea|oolong|jasmine/.test(n)) return '🍵';
  if (/sake|soju|beer|wine|cocktail|drink|beverage|juice/.test(n)) return '🍺';
  if (/ice.?cream|mochi|gelato|sorbet/.test(n)) return '🍦';
  if (/cake|dessert|sweet|candy|chocolate/.test(n)) return '🍰';
  if (/combo|special|set|platter|bento/.test(n)) return '🍱';
  if (/curry/.test(n)) return '🍛';
  return '🍽️';
}

function loadTodaysPicks() {
  let picks;
  try {
    const raw = localStorage.getItem(PICKS_KEY);
    picks = raw ? JSON.parse(raw) : null;
    if (!picks || !Array.isArray(picks) || picks.length === 0) picks = getDefaultPicks();
  } catch(e) { picks = getDefaultPicks(); }
  const container = document.getElementById('todays-picks-container');
  if (!container) return;
  container.innerHTML = '';
  picks.forEach(pick => {
    const promoType = pick.promoType || 'new';
    const { badge, priceHtml } = getPromoDisplay(promoType, pick.origPrice, pick.salePrice);
    const div = document.createElement('div');
    div.className = 'featured-item';
    div.style.cursor = 'pointer';
    const minNote = (promoType === 'free' && pick.minOrderAmt) ? '<div style="font-size:10px;color:#888;margin-top:2px;">Min. order $' + parseFloat(pick.minOrderAmt).toFixed(2) + '</div>' : '';
    div.innerHTML =
      '<div>' +
        '<div class="fi-label">' + badge + '</div>' +
        '<div class="fi-name">' + pick.name + '</div>' +
        '<div class="fi-price">' + priceHtml + '</div>' +
        minNote +
      '</div>';
    div.addEventListener('click', () => handlePickClick(pick));
    container.appendChild(div);
  });
}

// ─────────────────────────────────
// HOME SCREEN
// ─────────────────────────────────
function buildHomeScreen() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const tier = user ? getTier(user.tierPoints !== undefined ? user.tierPoints : pts) : null;
  const homePoints = document.getElementById('home-points');
  const homeSub    = document.getElementById('home-points-sub');
  const homeValue  = document.getElementById('home-points-value');
  if (homePoints) homePoints.textContent = pts.toLocaleString();
  if (homeValue)  homeValue.textContent  = '$' + (pts / 100).toFixed(2);
  if (homeSub) {
    homeSub.textContent = user
      ? (tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate')
      : 'Sign in to earn points';
  }
}

// ─────────────────────────────────
// ORDER HISTORY
// ─────────────────────────────────
function reorderItems(orderIdx) {
  const o = window._orderHistory?.[orderIdx];
  if (!o) return;
  const orderItems = o.orderItems || o.items || [];
  if (!orderItems.length) { alert('No items found in this order.'); return; }
  cart = [];
  orderItems.forEach(i => {
    const name  = i.name || i.n || '';
    const price = parseFloat(i.price || i.p) || 0;
    const emoji = i.emoji || i.e || '';
    if (name) addToCart(name, price, emoji, null);
  });
  updateCartBar();
  goTo('order');
  goToCheckout();
}

function showOrderHistory() {
  goTo('order-history');
  const user = getUser();
  const histEl = document.getElementById('order-history-list');
  if (!histEl) return;
  histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);font-size:13px;">Loading...</div>';
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ loadOrdersFromFirebase }) => {
      loadOrdersFromFirebase(20).then(orders => {
        const myOrders = user?.email
          ? orders.filter(o => o.customer?.email === user.email || o.customerEmail === user.email)
          : [];
        if (!myOrders.length) {
          histEl.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);">No orders yet.</div>';
          return;
        }
        window._orderHistory = myOrders;
        histEl.innerHTML = myOrders.map((o, oi) => {
          const date  = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';
          const orderItems = o.orderItems || o.items || [];
          const itemNames  = orderItems.map(i => { const em = i.emoji || i.e || ''; return (em ? em + ' ' : '') + (i.name || i.n); }).join(', ');
          const total = o.total ? '$' + parseFloat(o.total).toFixed(2) : '';
          return `<div style="padding:14px 16px;border-bottom:1px solid var(--border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <div style="font-size:13px;font-weight:600;">${date}</div>
              <div style="font-size:13px;font-weight:600;color:var(--gold);">${total}</div>
            </div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:10px;line-height:1.5;">${itemNames}</div>
            <button onclick="reorderItems(${oi})"
              style="width:100%;padding:10px;background:var(--ink);color:var(--gold);border:1px solid rgba(200,169,110,0.4);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.03em;">
              🔁 Reorder
            </button>
          </div>`;
        }).join('');
      }).catch(() => { histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);">Could not load orders.</div>'; });
    }).catch(() => {});
  } catch(e) {}
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkYearlyReset();
  updateAuthUI();
  loadTodaysPicks();
  buildHomeScreen();
  initServiceStatus();
  syncGuestMenuTabs();
  refreshCustomerAdminList();

  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(async ({ db }) => {
      if (!db) return;
      const { doc, setDoc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const today = new Date().toISOString().slice(0, 10);
      const statsDoc = doc(db, 'analytics', 'pageviews');
      const snap = await getDoc(statsDoc);
      const data = snap.exists() ? snap.data() : {};
      data[today] = (data[today] || 0) + 1;
      await setDoc(statsDoc, data, { merge: true });
    }).catch(() => {});
  } catch(e) {}

  history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  window.addEventListener('popstate', (e) => {
    const screen = e.state?.screen || 'home';
    goTo(screen, false);
  });

  // ── Firebase 메뉴 로드 — window.firebaseMenuData 세팅
  import('/js/firebase-menu.js')
    .then(({ loadMenuFromFirebase }) => loadMenuFromFirebase())
    .then(data => {
      if (data) {
        window.firebaseMenuData = data;
        const activeTab = document.querySelector('.menu-tab.active');
        if (activeTab) {
          const tabMatch = activeTab.getAttribute('onclick')?.match(/'(\w+)'/);
          if (tabMatch) buildMenu(tabMatch[1]);
        }
      }
    }).catch(() => {});
  const _isPaymentReturn = new URLSearchParams(window.location.search).get('payment') === 'success';
  if (_isPaymentReturn) {
    checkPaymentResult();
  } else {
    goTo('home');
  }

  const _initUser = getUser();
  if (_initUser?.email) {
    const fbUrl2 = window.location.origin + '/js/firebase-menu.js';
    if (_isPaymentReturn) {
      setTimeout(() => {
        import(fbUrl2).then(({ loadPointsFromFirebase }) => {
          loadPointsFromFirebase(_initUser.email).then(fbPts => {
            if (fbPts && fbPts.points !== undefined) {
              const user = getUser();
              if (user) console.log('Firebase points after payment:', fbPts.points, 'local:', user.points);
            }
          }).catch(() => {});
        }).catch(() => {});
      }, 3000);
    } else {
      import(fbUrl2).then(({ loadPointsFromFirebase, loadProfileFromFirebase }) => {
        loadPointsFromFirebase(_initUser.email).then(fbPts => {
          if (fbPts && fbPts.points !== undefined) {
            const user = getUser();
            if (user) {
              user.points     = fbPts.points;
              user.pointsLog  = fbPts.pointsLog || [];
              user.tierPoints = fbPts.tierPoints || 0;
              delete user._needsFirebaseSync;
              localStorage.setItem('prb_user', JSON.stringify(user));
              updateAuthUI();
              buildHomeScreen();
              if (document.getElementById('screen-rewards')?.classList.contains('active')) buildRewardsScreen();
            }
          }
        }).catch(() => {});
        loadProfileFromFirebase(_initUser.email).then(fbProfile => {
          if (fbProfile) {
            const user = getUser();
            if (user) {
              const merged = {
                ...user,
                firstName: fbProfile.firstName || user.firstName || '',
                lastName:  fbProfile.lastName  || user.lastName  || '',
                phone:     fbProfile.phone     || user.phone     || '',
                address:   fbProfile.address   || '',
                city:      fbProfile.city      || '',
                state:     fbProfile.state     || '',
                zip:       fbProfile.zip       || '',
                points:    user.points,
                pointsLog: user.pointsLog,
                tierPoints: user.tierPoints,
              };
              localStorage.setItem('prb_user', JSON.stringify(merged));
              localStorage.setItem('prb_profile', JSON.stringify(merged));
              updateAuthUI();
              buildHomeScreen();
            }
          }
        }).catch(() => {});
      }).catch(() => {});
    }
  }

  const tabs = document.querySelector('.menu-tabs');
  if (tabs) {
    let isDown = false, startX, scrollLeft;
    tabs.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - tabs.offsetLeft; scrollLeft = tabs.scrollLeft; });
    tabs.addEventListener('mouseleave', () => { isDown = false; });
    tabs.addEventListener('mouseup', () => { isDown = false; });
    tabs.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - tabs.offsetLeft; tabs.scrollLeft = scrollLeft - (x - startX); });
  }
});
