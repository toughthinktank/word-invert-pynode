import json
import sys

word = sys.argv[1];
num_list = []
for i in range(40):
    if i%2 == 1:
        num_list.append(i)
word_list = [x for x in word]
merge_list = []
for i in word_list:
    merge_list.append(i)
    merge_list.append(str(num_list.pop()))
merge_list.pop()
merged_word = "".join(merge_list)
# print('Merged String - ', merged_word)
merged_word_list = [x for x in merged_word]
i = 1
while i < len(merged_word_list):
    merged_word_list.pop(i)
    i += 2
final_word = "".join(merged_word_list)
# print('Return String - ', final_word)
result = {"final_string" : final_word}
json_res = json.dumps(result)
print(json_res)

