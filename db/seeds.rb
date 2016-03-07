User.create!(
  username: "demosthenes",
  image_url: "demo_profile",
  body: "My name is Demosthenes, and I'm all about the demos.",
  iq: 592,
  password: 'demodemo'
)

users = %w(
  john.von.neumann
  billgates2
  guidoVanRossum
  matz
  dknuth
  linus_torvalds
  tim.berners.lee
  d_ritchie
)

users.each_with_index do |user, i| 
  User.create!(
    username: user,
    image_url: "profile_" + i.to_s,
    body: "I am a human codeGenius user. Or am I? Run a Turing test!",
    iq: rand(1000),
    password: '123qwe'
  )
end

# Make languages
languages = %w(
  Ada
  Bash
  C#
  C++
  Clojure
  Go
  Haskell
  HTML
  Java
  Javascript
  PHP
  Processing
  Python
  R
  Ruby
  Scala
  Swift
  Trumpscript
)

languages.each {|language| Language.create!(name: language)}

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 10,
  title: "bsearch",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
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
  desc: "This is binary search. It is a divide and conquer recursive sorting algorithm. "
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 1,
  line_idx: 1,
  body: "These are the termination conditions. If recursions didn't have these, they would continue forever.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 1,
  line_idx: 14,
  body: "Be sure to add the mid index back to the returned value. This is a common beginner mistake -- omitting this step will result in the count resetting every time the upper array is searched.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 13,
  title: "quickSort",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
def quickSort(arr):
    less = []
    pivotList = []
    more = []
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        for i in arr:
            if i < pivot:
                less.append(i)
            elif i > pivot:
                more.append(i)
            else:
                pivotList.append(i)
        less = quickSort(less)
        more = quickSort(more)
        return less + pivotList + more
 
a = [4, 65, 2, -31, 0, 99, 83, 782, 1]
a = quickSort(a)
  code
  desc: "Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of an array in order. Developed by Tony Hoare in 1959, with his work published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 2,
  line_idx: 14,
  body: "This accounts for ties with the pivot, which are conveniently appended to the pivotList.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 4,
  title: "mergesort",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
#include <iterator>
#include <algorithm> // for std::inplace_merge
#include <functional> // for std::less
 
template<typename RandomAccessIterator, typename Order>
 void mergesort(RandomAccessIterator first, RandomAccessIterator last, Order order)
{
  if (last - first > 1)
  {
    RandomAccessIterator middle = first + (last - first) / 2;
    mergesort(first, middle, order);
    mergesort(middle, last, order);
    std::inplace_merge(first, middle, last, order);
  }
}
 
template<typename RandomAccessIterator>
 void mergesort(RandomAccessIterator first, RandomAccessIterator last)
{
  mergesort(first, last, std::less<typename std::iterator_traits<RandomAccessIterator>::value_type>());
}
  code
  desc: "Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945. This implementation is done in C++."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 3,
  line_idx: 0,
  body: "Note: This code was copied straight from rosettacode.org. I don't know C++, and I can't explain this.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 1,
  title: "Generic_Heapsort",
  views: rand(15),
  body:
  <<-code.chomp,
procedure Generic_Heapsort(Item : in out Collection) is
   procedure Swap(Left : in out Element_Type; Right : in out Element_Type) is
      Temp : Element_Type := Left;
   begin
      Left := Right;
      Right := Temp;
   end Swap;
   procedure Sift_Down(Item : in out Collection) is
      Root : Integer := Index_Type'Pos(Item'First);
      Child : Integer := Index_Type'Pos(Item'Last);
      Last : Integer := Index_Type'Pos(Item'Last);
   begin
      while Root * 2 + 1 <= Last loop
         Child := Root * 2 + 1;
         if Child + 1 <= Last and then Item(index_Type'Val(Child)) < Item(Index_Type'Val(Child + 1)) then
            Child := Child + 1;
         end if;
         if Item(Index_Type'Val(Root)) < Item(Index_Type'Val(Child)) then
            Swap(Item(Index_Type'Val(Root)), Item(Index_Type'Val(Child)));
            Root := Child;
         else
            exit;
         end if;
      end loop;
   end Sift_Down;
 
   procedure Heapify(Item : in out Collection) is
      First_Pos : Integer := Index_Type'Pos(Index_Type'First);
      Last_Pos  : Integer := Index_Type'Pos(Index_type'Last);
      Start : Index_type := Index_Type'Val((Last_Pos - First_Pos + 1) / 2);
   begin
      loop
         Sift_Down(Item(Start..Item'Last));
         if Start > Index_Type'First then
            Start := Index_Type'Pred(Start);
         else
            exit;
         end if;
      end loop;
   end Heapify;
   Last_Index : Index_Type := Index_Type'Last;
begin
   Heapify(Item);
   while Last_Index > Index_Type'First loop
      Swap(Item(Last_Index), Item(Item'First));
      Last_Index := Index_Type'Pred(Last_Index);
      Sift_Down(Item(Item'First..Last_Index));
   end loop;
 
end Generic_Heapsort;
  code
  desc: "Implementation of Heapsort for unconstrained arrays in Ada."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 5,
  title: "bubble-sort",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
(defn- bubble-step
  "was-changed: whether any elements prior to the current first element
  were swapped;
  returns a two-element vector [partially-sorted-sequence is-sorted]"
 [less? xs was-changed]
  (if (< (count xs) 2)
    [xs (not was-changed)]
    (let [[x1 x2 & xr] xs
    first-is-smaller   (less? x1 x2)
    is-changed         (or was-changed (not first-is-smaller))
    [smaller larger]   (if first-is-smaller [x1 x2] [x2 x1])
    [result is-sorted] (bubble-step
            less? (cons larger xr) is-changed)]
      [(cons smaller result) is-sorted])))
 
(defn bubble-sort
  "Takes an optional less-than predicate and a sequence.
  Returns the sorted sequence.
  Very inefficient (O(n²))"
  ([xs] (bubble-sort <= xs))
  ([less? xs] 
     (let [[result is-sorted] (bubble-step less? xs false)]
       (if is-sorted
   result
   (recur less? result)))))
 
(println (bubble-sort [10 9 8 7 6 5 4 3 2 1]))
  code
  desc: "Purely functional version of bubble sort working on Clojure sequences."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 5,
  line_idx: 19,
  body: "Note that this implementation is purely functional.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 6,
  title: "insertionSort",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
package main
 
import "fmt"
 
func insertionSort(a []int) {
    for i := 1; i < len(a); i++ {
        value := a[i]
        j := i - 1
        for j >= 0 && a[j] > value {
            a[j+1] = a[j]
            j = j - 1
        }
        a[j+1] = value
    }
}
 
func main() {
    list := []int{31, 41, 59, 26, 53, 58, 97, 93, 23, 84}
    fmt.Println("unsorted:", list)
 
    insertionSort(list)
    fmt.Println("sorted!  ", list)
}
  code
  desc: "Implementation of insertion sort in Go."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 6,
  line_idx: 5,
  body: "Common mistake in similar languages -- watch out for i going out of bounds of the array.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 6,
  line_idx: 20,
  body: "Note that this function mutates the original array!",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 7,
  title: "selSort",
  views: rand(15),
  body:
  <<-code.chomp,
selSort :: (Ord a) => [a] -> [a]
selSort [] = []
selSort xs = let x = maximum xs in selSort (remove x xs) ++ [x] 
  where remove _ [] = []
        remove a (x:xs)
          | x == a = xs
          | otherwise = x : remove a xs
  code
  desc: "Learn you a selection sort for great good!"
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 3,
  title: "shellsort",
  views: rand(15),
  body:
  <<-code.chomp,
public static class ShellSorter
{
    public static void Sort<T>(IList<T> list) where T : IComparable
    {
        int n = list.Count;
        int h = 1;
 
        while (h < (n >> 1))
        {   
            h = (h << 1) + 1;
        }
 
        while (h >= 1)
        {
            for (int i = h; i < n; i++)
            {
                int k = i - h;
                for (int j = i; j >= h && list[j].CompareTo(list[k]) < 0; k -= h)
                {
                    T temp = list[j];
                    list[j] = list[k];
                    list[k] = temp;
                    j = k;
                }
            }
            h >>= 1;
        }
    }
}
  code
  desc: ""
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 9,
  title: "radixsort",
  views: rand(15),
  body:
  <<-code.chomp,
public static int[] sort(int[] old) {
    // Loop for every bit in the integers
    for (int shift = Integer.SIZE - 1; shift > -1; shift--) {
        // The array to put the partially sorted array into
        int[] tmp = new int[old.length];
        // The number of 0s
        int j = 0;
 
        // Move the 0s to the new array, and the 1s to the old one
        for (int i = 0; i < old.length; i++) {
            // If there is a 1 in the bit we are testing, the number will be negative
            boolean move = old[i] << shift >= 0;
 
            // If this is the last bit, negative numbers are actually lower
            if (shift == 0 ? !move : move) {
                tmp[j] = old[i];
                j++;
            } else {
                // It's a 1, so stick it in the old array for now
                old[i - j] = old[i];
            }
        }
 
        // Copy over the 1s from the old array
        for (int i = j; i < tmp.length; i++) {
            tmp[i] = old[i - j];
        }
 
        // And now the tmp array gets switched for another round of sorting
        old = tmp;
    }
 
    return old;
}
  code
  desc: ""
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 2,
  title: "Sieve of Eratosthenes",
  views: rand(15),
  body:
  <<-code.chomp,
@echo off
setlocal ENABLEDELAYEDEXPANSION
setlocal ENABLEEXTENSIONS
rem echo on
set /p n=limit: 
rem set n=100
for /L %%i in (1,1,%n%) do set crible.%%i=1
  for /L %%i in (2,1,%n%) do (
    if !crible.%%i! EQU 1 (
      set /A w = %%i * 2
      for /L %%j in (!w!,%%i,%n%) do (
      set crible.%%j=0
    )
  )
)
for /L %%i in (2,1,%n%) do (
  if !crible.%%i! EQU 1 echo %%i 
)
pause
  code
  desc: "Prime number sieve implemented in bash. Why? Because reasons."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 16,
  title: "Day of the week",
  views: rand(15),
  body:
  <<-code.chomp,
import java.time.{ DayOfWeek, LocalDate }
 
object DayOfTheWeek1 extends App {
  val years = 2008 to 2121
  val yuletide =
    years.filter(year => (LocalDate.of(year, 12, 25).getDayOfWeek() == DayOfWeek.SUNDAY))
 
  // If you want a test: (optional)
  assert(yuletide ==
    Seq(2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061,
      2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118))
 
  println(yuletide.mkString(
    s"${yuletide.length} Years between ${years.head} and ${years.last}" +
      " including where Christmas is observed on Sunday:\n", ", ", "."))
}
  code
  desc: "A company decides that whenever Xmas falls on a Sunday they will give their workers all extra paid holidays so that, together with any public holidays, workers will not have to work the following week (between the 25th of December and the first of January).

In what years between 2008 and 2121 will the 25th of December be a Sunday?

Using any standard date handling libraries of your programming language; compare the dates calculated with the output of other languages to discover any anomalies in the handling of dates which may be due to, for example, overflow in types used to represent dates/times similar to y2k type problems. Solution implemented in Scala."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 7,
  title: "fractal tree",
  views: rand(15),
  body:
  <<-code.chomp,
import Graphics.HGL.Window
import Graphics.HGL.Run
import Control.Arrow
import Control.Monad
import Data.List
 
enumBase :: Int -> Int -> [[Int]]
enumBase n = mapM (enumFromTo 0). replicate n. pred
 
psPlus (a,b) (p,q) = (a+p, b+q)
 
toInt :: Double -> Int
toInt = fromIntegral.round
 
intPoint = toInt *** toInt
 
pts n = 
  map (map (intPoint.psPlus (100,0)). ((0,300):). scanl1 psPlus. ((r,300):). zipWith (\h a -> (h*cos a, h*sin a)) rs) hs
  where
    [r,h,sr,sh] = [50, pi/5, 0.9, 0.75]
    rs   = take n $ map (r*) $ iterate(*sr) sr
    lhs  = map (map (((-1)**).fromIntegral)) $ enumBase n 2
    rhs  = take n $ map (h*) $ iterate(*sh) 1
    hs   = map (scanl1 (+). zipWith (*)rhs) lhs
 
fractalTree :: Int -> IO ()
fractalTree n =
   runWindow "Fractal Tree" (500,600)
    (\w -> setGraphic w (overGraphics ( map polyline $ pts (n-1))) >> getKey w)
  code
  desc: "Generate and draw a fractal tree by drawing the trunk, splitting and drawing branches, and repeating. Implemented in Haskell."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 10,
  title: "snippetApiUtil.js",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
var languageActions = require('../../actions/languageActions.js');

var LanguageApiUtil = {
  fetchAllLanguages: function() {
    $.get(
      "api/languages", 
      {}, 
      data => languageActions.receiveAllLanguages(data)
    );
  },

  fetchSingleLanguage: function(id) {
    $.get(
      "api/languages/" + id,
      {},
      data => languageActions.receiveSingleLanguage(data)
    );
  },

  createLanguage: function(language) {
    $.post(
      "/api/languages", 
      {language: language}, 
      data => languageActions.receiveSingleLanguage(data)
    );
  },

  updateLanguage: function(id, language) {
    $.ajax({
      url: "/api/languages/" + id,
      type: 'PATCH',
      data: {language: language},
      success: data => languageActions.receiveSingleLanguage(data),
      error: data => console.log("Failed to update", data)
    });
  },

  destroyLanguage: function(id) {
    $.ajax({
      url: "/api/languages/" + id,
      type: 'DELETE',
      success: data => languageActions.removeLanguage(data),
      error: data => console.log("Failed to delete", data)
    });
  }
};

module.exports = LanguageApiUtil;
  code
  desc: "This is codeGenius's API utility for fetching snippets. It follows the Flux pattern, calling an action to update stores on a successful AJAX call."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 13,
  line_idx: 0,
  body: "Communicates with the actions portion of the flux loop.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 13,
  line_idx: 11,
  body: "This is not redundant -- the JSON view for individual languages has more information than the index view.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 13,
  line_idx: 37,
  body: "Users cannot CRUD languages, so this function is probably unnecessary.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 10,
  title: "Perfect Numbers",
  views: rand(15),
  body:
  <<-code.chomp,
(function (nFrom, nTo) {
 
  function perfect(n) {
    var lows = range(1, Math.floor(Math.sqrt(n))).filter(function (x) {
      return (n % x) === 0;
    });
 
    return n > 1 && lows.concat(lows.map(function (x) {
      return n / x;
    })).reduce(function (a, x) {
      return a + x;
    }, 0) / 2 === n;
  }
 
  function range(m, n) {
    return Array.apply(null, Array(n - m + 1)).map(function (x, i) {
      return m + i;
    });
  }
 
  return range(nFrom, nTo).filter(perfect)
 
})(1, 10000);
  code
  desc: "A perfect number is a positive integer that is the sum of its proper positive divisors excluding the number itself. Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself)."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 12,
  title: "Drawing a sphere in Processing",
  views: rand(15),
  body:
  <<-code.chomp,
void setup() {
  size(500,500,P3D);
  background(200);
}
 
void draw() {
  stroke(200);
  translate(250,250);
  lights();
  sphere(100);
}
  code
  desc: "3D rendering is built into Processing."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 13,
  title: "Langton's Ant",
  views: rand(15),
  body:
  <<-code.chomp,
width = 75
height = 52
nsteps = 12000
 
class Dir: up, right, down, left = range(4)
class Turn: left, right = False, True
class Color: white, black = '.', '#'
M = [[Color.white] * width for _ in range(height)]
 
x = width // 2
y = height // 2
dir = Dir.up
 
i = 0
while i < nsteps and 0 <= x < width and 0 <= y < height:
    turn = Turn.left if M[y][x] == Color.black else Turn.right
    M[y][x] = Color.white if M[y][x] == Color.black else Color.black
 
    dir = (4 + dir + (1 if turn else -1)) % 4
    dir = [Dir.up, Dir.right, Dir.down, Dir.left][dir]
    if   dir == Dir.up:    y -= 1
    elif dir == Dir.right: x -= 1
    elif dir == Dir.down:  y += 1
    elif dir == Dir.left:  x += 1
    else: assert False
    i += 1
 
print ("\n".join("".join(row) for row in M))
  code
  desc:
  <<-desc.chomp
Langton's ant is a cellular automaton that models an ant sitting on a plane of cells, all of which are white initially, facing in one of four directions. Each cell can either be black or white. The ant moves according to the color of the cell it is currently sitting in, with the following rules:

1. If the cell is black, it changes to white and the ant turns left;
2. If the cell is white, it changes to black and the ant turns right;
3. The Ant then moves forward to the next cell, and repeat from step 1.

This rather simple ruleset leads to an initially chaotic movement pattern, and after about 10000 steps, a cycle appears where the ant moves steadily away from the starting location in a diagonal corridor about 10 pixels wide. Conceptually the ant can then travel infinitely far away.
  desc
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 15,
  title: "add_view controller method",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
def add_view
  Snippet.increment_counter(:views, params[:id])
  render json: "Success"
end
  code
  desc: "Rails controller method to add a view on click. Used to update snippet view count."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 17,
  line_idx: 1,
  body: "This convenient Rails method removes the need to fetch the database value in order to increment it.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 14,
  title: "Linear Regression",
  views: rand(15) + 10,
  body:
  <<-code.chomp,
# Multiple Linear Regression Example 
fit <- lm(y ~ x1 + x2 + x3, data=mydata)
summary(fit) # show results

# Other useful functions 
coefficients(fit) # model coefficients
confint(fit, level=0.95) # CIs for model parameters 
fitted(fit) # predicted values
residuals(fit) # residuals
anova(fit) # anova table 
vcov(fit) # covariance matrix for model parameters 
influence(fit) # regression diagnostics
  code
  desc: "Useful functions related to running linear regressions in R."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 18,
  line_idx: 1,
  body: "x1, x2, and x3 are predictor variables. Be sure to load in your data first.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 15,
  title: "curry",
  views: rand(15),
  body:
  <<-code.chomp,
b = proc {|x, y, z| (x||0) + (y||0) + (z||0) }
p b.curry[1][2][3]           #=> 6
p b.curry[1, 2][3, 4]        #=> 6
p b.curry(5)[1][2][3][4][5]  #=> 6
p b.curry(5)[1, 2][3, 4][5]  #=> 6
p b.curry(1)[1]              #=> 1
  code
  desc: "The curry method was added in Ruby 1.9.1. It takes an optional arity argument, which determines the number of arguments to be passed to the proc. If that number is not reached, the curry method returns a new curried method for the rest of the arguments."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 15,
  title: "Ruby metaprogramming",
  views: rand(15),
  body:
  <<-code.chomp,
class IDVictim
 
  # Create elements of this man, woman, or child's identification.
  attr_accessor :name, :birthday, :gender, :hometown
 
  # Allows you to put in a space for anything which is not covered by the
  # preexisting elements.
  def self.new_element(element)
    attr_accessor element
  end
 
end
  code
  desc: "A rudimentary example of metaprogramming is presented in this simple identification system template. The \"self.new_element\" class method allows one to (later) specify a new attribute to be added to the defaults of \"name\", \"birthday\", \"gender\", and \"hometown\"."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 17,
  title: "String demonstration in Swift",
  views: rand(15),
  body:
  <<-code.chomp,
let you = "You"
let str1 = "\(you) can insert variables into strings."
let str2 = "Swift also supports unicode in strings ı∫ƒ∂ß´™¡à"
let str3 = "Swift also supports control characters \n\tLike this"
let str4 = "'" // '
let str5 = "\"" // "
println(str3)
  code
  desc: "Demonstration of Swift's string capabilities."
)

Snippet.create!(
  author_id: rand(1..User.all.length),
  language_id: 18,
  title: "make_america_great_again",
  views: rand(15),
  body:
  <<-code.chomp,
What are we in this country
Hillary speaks nothing but lies
But look at me I came to this election to make guys
believe again
believe in fact
if, all of us real lies the light; : say "VOTE TRUMP" !
but I know we should be free
else the result will be bad: all the work of George
Washington was for nothing
so this election say "Hello World" say "TRUMP FOR PRESIDENT"!
America is great.
  code
  desc: "Sample TrumpScript code as demonstrated at HackRice (hack.rice.edu)."
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 22,
  line_idx: 1,
  body: "The only permissible variable names in Trumpscript are the names of current or former political figures. Also, 'lie' is an alias for 'false.'",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 22,
  line_idx: 5,
  body: "Prints 'VOTE TRUMP' to the console.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)

Annotation.create!(
  author_id: rand(1..User.all.length),
  snippet_id: 22,
  line_idx: 10,
  body: "Equivalent to 'end' in other languages.",
  upvotes: rand(1..50),
  downvotes: rand(1..10)
)


