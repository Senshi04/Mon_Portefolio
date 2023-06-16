# -*- coding: utf-8 -*-
"""
Created on Wed Nov  9 09:08:34 2022

@author: India CABO
"""

def create_network(list_of_friends):
    dico = {}
    i = 0
    while i < len(list_of_friends):
        nom = list_of_friends[i]
        ami = list_of_friends[i+1]
        if nom not in dico:
            dico[nom] = []
        if ami not in dico:
            dico[ami] = []
        dico[nom].append(ami)
        dico[ami].append(nom)
        i+=2
    return dico

tab = ["Alice","Bob",'Marya','India','Bob','Samia']

def get_people(network):
    list_of_friends = []
    for nom in network:
        list_of_friends.append(nom)
    return list_of_friends

def are_friends(network,person,group):
        return person in network[group] 

network = create_network(tab)

# print(are_friends(network,'India','Marya'))
# print(are_friends(network,'India','Bob'))

def all_his_friends(network,person,group):
    for friend in group:
        if not are_friends(network,person,friend):
            return False
    return True

def is_a_community(network, tab) :
    i = 0
    while i < len(tab):
        p = tab.pop(i)
        for val in tab :
            if val not in network[p]:
                return False
        tab.append(p)
        i+=1
    return True
        

network2 = {
  "Alice" : ["Bob", "Dominique"],
  "Bob" : ["Alice", "Charlie", "Dominique"],
  "Charlie" : ["Bob"],
  "Dominique" : ["Alice", "Bob"]
}

group1 = ["Alice", "Bob", "Charlie", "Dominique"]
group2 = ["Alice", "Bob", "Charlie"]

def find_community(network,group):
    community = []
    if not group[0] in network.keys():
        return False
    community.append(group[0])
    i=1
    while i < len(group):
        if group[i] in network.keys():
            if all_his_friends(network,group[i],community):
                community.append(group[i])
        i+=1
    return community

# print(find_community(network2, group1))
# print(find_community(network2, ["Charlie", "Alice", "Bob", "Dominique"]))
# print(find_community(network2, ["Charlie", "Alice", "Dominique"]))

def order_by_decreasing_popularity(network,group):
    popu = group.copy()
    i = 0
    while i < len(group):
        j = 0
        while j < len(popu):
            if len(network[popu[i]]) < len(network[popu[j]]):
                popu.append(popu.pop(i))
            j+=1
        i+=1
    return popu

# print(order_by_decreasing_popularity(network2,group2))

def find_community_by_decreasing_popularity(network):
     return find_community(network,order_by_decreasing_popularity(network,get_people(network)))

# print(find_community_by_decreasing_popularity(network2))
    
def find_community_from_person(network, person):
    commu = [person]
    commu += find_community(network, (order_by_decreasing_popularity(network, network[person])))
    return commu

# print(find_community_from_person(network2,'Alice'))
# print(find_community_from_person(network2,"Charlie"))

def find_max_community(network):
    max_commu = []
    for person in network:
        if len(max_commu) < len(find_community_from_person(network, person)):
            max_commu = find_community_from_person(network, person)
    return max_commu

print(find_max_community(network2))