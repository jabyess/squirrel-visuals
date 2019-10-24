f = open('./squirrels.csv')
nf = open('./squirrels.csv', 'w')
linecount = 0

for line in f.readlines():
    newline = ""
    if linecount != 0:
        split_line = line.split(",")
        date = split_line[5]

        mm = date[:2]
        dd = date[2:4]
        yyyy = date[4:]
        newdate = f"{yyyy}-{mm}-{dd}"
        
        split_line[5] = newdate
        newline = ",".join(split_line)
        nf.write(newline)

    else:
        nf.write(line)

    linecount += 1
