class Sort #solution for http://www.problemotd.com/problem/sorted-linked-list/

  #//Input
  #1->2->3->16->2->3->17
  #//Output
  #1->2->2->3->3->16->17

  #@param [String] input
  def run(input)

    input_as_array = input.split(/->/)
    input_as_num = []

    input_as_array.each {
        |i|
      unless i.nil?
        input_as_num << Integer(i)
      end
    }

    input_as_num.sort!

    ret = ''

    input_as_num.each do |i|
      ret += i.to_s + '->'
    end

    puts ret[0..-3]

  end

end
Sort.new.run('1->2->3->16->2->3->17')