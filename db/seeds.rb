# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Make fake users
10.times do 
  name = Faker::Name.name
  User.create!(
    username: Faker::Internet.user_name(name, %w(. _)),
    email: Faker::Internet.safe_email(name),
    body: Faker::Hipster.paragraph(3),
    iq: rand(1000),
    password: '123qwe'
  )
end


# Make languages
languages = %w(
  Trumpscript
  Java
  Javascript
  C#
  C++
  Python
  PHP
  Swift
  Ruby
  R
  Haskell
)

languages.each {|language| Language.create!(name: language)}


# Make snippets
problems = %w(
  quicksort
  mergesort
  timsort
  heapsort
  bubblesort
  insertionsort
  selectionsort
  shellsort
  bucketsort
  radixsort
  binarysearch
  shittysort
  DFS
  BFS
  make_change
  stock_picker
  traveling_salesman
  fibonacci
  primes
  myCurry
  myBind
)

Snippet.create!(
  author_id: 1,
  language_id: 3,
  title: "def timBSearch",
  views: 99999,
  body:
  <<-code,
Array.prototype.bsearch = function(target) {
    if (this === [] || (this.length === 1 && this[mid] !== target)) {return -1;}

    var mid = Math.floor(this.length / 2);

    if (this[mid] === target) {
      return mid;
    } else if (this[mid] > target) {
      return this.slice(0, mid).bsearch(target);
    } else {
      var search = this.slice(mid).bsearch(target);
      if (search === -1) {
        return -1;
      } else {
        return search + mid;
      }
    }
};
  code
  desc: "This is binary search. It is a divide and conquer recursive sorting algorithm. It makes me want to self.destruct."
)

20.times do |i|
  author_id = rand(1..User.all.length)
  language_id = rand(1..Language.all.length)
  Snippet.create!(
    author_id: author_id,
    language_id: language_id,
    title: problems[i],
    views: rand(1000),
    body: 
    <<-code,
def #{problems[i]}(n)
  puts "Too hard"
  self.destruct
end
    code
    desc: Faker::Hipster.paragraph(3)
  )
end


# Make snippet comments
50.times do 
  author_id = rand(1..User.all.length)
  snippet_id = rand(1..Snippet.all.length)
  SnippetComment.create!(
    author_id: author_id,
    snippet_id: snippet_id,
    body: Faker::Hipster.paragraph(3),
    upvotes: rand(1..100),
    downvotes: rand(1..10)
  )
end