import toascii

SCALE =  .75;

badApple = toascii.VideoConverter("bad-apple.mp4", SCALE, 1, "high")

print('converting')
badApple.convert()

print("converted, compiling")

text = "SPLIT".join(badApple.ascii_frames)

file = open("out.txt", "w")
file.write(text)
file.close()